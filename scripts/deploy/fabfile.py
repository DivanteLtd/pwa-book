from fabric.api import *
from fabric import colors
from fabric.contrib.files import exists
from fabric.operations import _prefix_commands, _prefix_env_vars, require
import os
import slack

PROJECT_NAME = "Divante.com PWA Book"

STAGES = {
    "test": {
        "name": "Test",
        "hosts": [os.environ['TEST_HOST']],
        "port": os.environ['TEST_PORT'],
        "user": "divanteco",
        "dir": "/home/www/divanteco/www/pwabook"
    },
    "prod": {
        "name": "Production",
        "hosts": [os.environ['PROD_HOST']],
        "port": os.environ['PROD_PORT'],
        "user": "divanteco",
        "dir": "/home/www/divanteco/www/pwabook"
    }
}

SLACK = slack.WebClient(token=os.environ['SLACK_API_TOKEN'])


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
    """ Setup test environment """
    stage_set("test")


@task
def deploy():
    """ Start the deployment """
    require("stage", provided_by=(test,prod,))
    print(colors.green("Start deploying in ") + colors.red(env.name))
    notify("*" + PROJECT_NAME + "* @ `" + env.name + "` :: Deployment Started")

    #copy_chapters()
    run("ls -la")

    notify("*" + PROJECT_NAME + "* @ `" + env.name + "` :: Deployment Completed")

    print(colors.green("Done!"))


def copy_chapters():
    """ Copy chapters directory """
    print(colors.blue("Copying new chapters"))

    chapter_dir = env.dir + "/chapter"
    run("rm -rf " + chapter_dir)
    run("mkdir " + chapter_dir)
    put("../../docs/.vuepress/dist/.", chapter_dir)


def notify(message):
    """ Notify slack """
    SLACK.chat_postMessage(channel='#_snippety-apollo-ci',text=message)
