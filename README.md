# grunt-basic-configuration
This project demonstrates a simple grunt configuration which lints all javascript files in a given directory. If no errors are found, the files are them copied to a build folder where they are minified.

## Running the project

Open your command console and clone the repository to your machine

    git clone https://github.com/benmoran18/grunt-basic-configuration.git
    
With the console still open, cd into the project folder

    cd grunt-basic-configuration

Now install the dev dependencies via npm

    npm install --only=dev

With the necessary dependencies installed type the following

    grunt

You can test the linting part of the grunt configuration by creating a file or updating one of the existing ones with an error inside it. The grunt process will exit before copying the source files over to the build directory if an error is found!
