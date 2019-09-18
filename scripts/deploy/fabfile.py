from fabric.api import run, local, env, settings, cd, task, put, execute
from fabric import colors
from fabric.contrib.files import exists
from fabric.operations import _prefix_commands, _prefix_env_vars, require
from datetime import datetime

STAGES = {
    "test": {
        "name": "Test",
        "hosts": ["test-lin-6.divante.pl"],
        "port": "60022",
        "user": "divanteco",
        "dir": "/home/www/divanteco/www/pwabook"
    }
}


def stage_set(stage_name="test"):
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
def deploy():
    """ Start the deployment """
    require("stage", provided_by=(test,prod,))
    print(colors.green("Start deploying in ") + colors.red(env.name))

    copy_chapters()

    print(colors.green("Done!"))


def copy_chapters():
    """ Copy chapters directory """
    print(colors.blue("Copying new chapters"))

    chapter_dir = env.dir + "/chapter";
    run("rm -rf " + chapter_dir)
    run("mkdir " + chapter_dir)
    put("../../docs/.vuepress/dist/.", chapter_dir)
