pipeline{
    agent {
        docker {
            image 'node'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages{
        stage('Installing NPM dependencies'){
            steps {
                sh 'npm install'
            }
        }
         stage('Run Unit Test'){
            steps {
                sh 'npm run test'
            }
        }
        stage('Run Coverage Test'){
            steps {
                echo 'Coverage test'
            }
        }
    }
}
