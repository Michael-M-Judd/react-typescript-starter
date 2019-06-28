    
rm -rf coverage
jest --rootDir . --coverage --runInBand "$@"