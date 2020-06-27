const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    options: {
        'sonar.projectKey': 'express-js-demo',
        'sonar.sources': 'src',
        'sonar.tests': 'test',
        'sonar.exclusions': 'node_modules/**, coverage/**, test/**',
        'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
        'sonar.textExecutionReportPaths': 'test-report.xml'
    }
}, ()=> {});

module.exports = sonarqubeScanner;