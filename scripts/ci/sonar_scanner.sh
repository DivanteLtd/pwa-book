#!/bin/sh

set -eu

echo -e "\e[34m=> Sonar Scanner \e[0m"

/sonar-scanner-cli/bin/sonar-scanner \
  -Dsonar.projectKey=divante.com_${CI_PROJECT_NAME} \
  -Dsonar.analysis.mode=publish \
  -Dsonar.gitlab.commit_sha=$(git log --pretty=format:%H origin/${TARGET_BRANCH}..${CI_COMMIT_SHA} | tr '\n' ',') \
  -Dsonar.gitlab.project_id=${CI_PROJECT_ID} \
  -Dsonar.gitlab.ref_name=${CI_COMMIT_REF_NAME} \
  -Dsonar.sources=${FILES_SOURCES} \
  -Dsonar.host.url=${SONAR_SERVER_URL} \
  -Dsonar.login=${SONAR_API_KEY} \
  -Dsonar.branch.name=${CI_COMMIT_REF_NAME} \
  -Dsonar.branch.target=${TARGET_BRANCH} \
  -Dsonar.projectBaseDir=./ \
  -Dsonar.tests=${TESTS_SOURCES} \
  -Dsonar.language=php \
  -Dsonar.sourceEncoding=UTF-8 \
  -Dsonar.php.coverage.reportPath=${REPORT_PATH_COVERAGE} \
  -Dsonar.php.tests.reportPath=${REPORT_PATH_TESTS}

echo -e "\e[34m=> Done! \e[0m"
