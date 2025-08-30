pipeline {
    agent any
    
    tools {
        nodejs 'Node 16'  
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
                echo 'Deploy seria feito aqui (simulado)'
                echo 'Arquivos buildados estão prontos para deploy'
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