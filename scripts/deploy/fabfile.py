from fabric.api import run, local, env, settings, cd, task, put, execute
from fabric import colors
from fabric.contrib.files import exists
from fabric.operations import _prefix_commands, _prefix_env_vars, require
from datetime import datetime

RELEASES_DIR="releases"
CURRENT_DIR="current"

REPOSITORY="ssh://git@gitlab.divante.pl:60022/snippety-zaglady/projects/divante.com/pwa-ebook.git"

STAGES = {
    "dev": {
        "name": "Development",
        "hosts": ["192.168.10.10"],
        "user": "vagrant",
        "dir": "/home/vagrant/code/divante.com/pwa-ebook"
    },
    "test": {
        "name": "Test",
        "hosts": ["test-lin-6.divante.pl"],
        "port": "60022",
        "user": "divanteco",
        "dir": "/home/www/divanteco/www/pwa-ebook"
    }
}


def stage_set(stage_name="dev"):
    env.stage = stage_name
    for option, value in STAGES[env.stage].items():
        setattr(env, option, value)


@task
def prod():
    """ Setup production environment """
    stage_set("prod")


@task
def test():
    """ Setup production environment """
    stage_set("test")


@task
def dev():
    """ Setup development environment """
    stage_set("dev")


@task
def deploy(branch="develop"):
    """ Start the deployment """
    require("stage", provided_by=(dev,test,prod,))
    print(colors.green("Start deploying ") + colors.yellow(branch) + colors.green(" in ") + colors.red(env.name))

    now = datetime.now()
    version = now.strftime("%Y%m%d%H%M%S")
    print(colors.blue("Creating new version: ") + colors.green(version))

    clone_project(version)
    build(version)
    create_symlink(version)
    clean_versions()

    print(colors.green("Done!"))


def clone_project(version):
    """ Clonning project """
    print(colors.blue("Clonning project"))

    with cd(env.dir + "/" + RELEASES_DIR):
        run("git clone " + REPOSITORY + " " + version)


def build(version):
    """ Build application """
    print(colors.blue("Buildind application"))
    # ....


def create_symlink(version):
    """ Create symlink """
    print(colors.blue("Creating symlink"))

    run("ln -s " + env.dir + "/" + RELEASES_DIR + "/" + version + " " + env.dir + "/" + CURRENT_DIR)


def clean_versions():
    """ Create old release directories """
    print(colors.blue("Cleaning old versions"))

    with cd(env.dir + "/" + RELEASES_DIR):
        run("rm -rf `ls -t | awk 'NR>5'`")
