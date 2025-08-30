pipeline {
    agent any
    
    tools {
        nodejs 'Node 22'  
    }


    stages {
        stage('Checkout') {
            steps {
                // Baixar código do GitHub
                git 'https://github.com/Gadelha1/RPJAVA.git'
            }
        }
        
        stage('Install Dependencies') {
            parallel {
                stage('Frontend') {
                    steps {
                        dir('frontend') {
                            sh 'npm install'
                        }
                    }
                }
                stage('Backend') {
                    steps {
                        dir('backend') {
                            sh 'npm install'
                        }
                    }
                }
            }
        }
        
        stage('Test') {
            parallel {
                stage('Frontend Tests') {
                    steps {
                        dir('frontend') {
                            sh 'npm test -- --coverage --watchAll=false --passWithNoTests'
                        }
                    }
                }
                stage('Backend Tests') {
                    steps {
                        dir('backend') {
                            sh 'npm test'
                        }
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy para servidor ou container
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            // Limpar workspace
            cleanWs()
        }
        success {
            echo 'Pipeline executada com sucesso!'
        }
        failure {
            echo 'Pipeline falhou!'
        }
    }
}