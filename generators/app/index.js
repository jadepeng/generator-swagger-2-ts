'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const codegen = require('../../codegen');
const fs = require('fs');
const axios = require('axios');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the swagger 2 typescript ${chalk.red(
          'generator-swagger-2-ts'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'swaggerUrl',
        message: 'please input swagger url,eg:http://localhost:8051/swagger-ui.html',
        default: 'http://localhost:8051/swagger-ui.html'
      },
      {
        type: 'input',
        name: 'className',
        message: 'please enter class Name of the generated API',
        default: 'API'
      },
      {
        type: 'list',
        name: 'type',
        message: 'please choose generated API type , js or typescript',
        choices: [
          {
            name: 'typescript',
            value: 'typescript'
          },
          {
            name: 'javascript',
            value: 'js'
          }
        ]
      },
      {
        type: 'input',
        name: 'outPutFile',
        message: 'Please enter the API file name',
        default: 'api.ts'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    let swaggerUrl = this.props.swaggerUrl.replace('swagger-ui.html', 'v2/api-docs');
    let clsName = this.props.className;
    let outPutFile = this.props.outPutFile;
    let isTypescript = this.props.type === "typescript";
    axios.get(swaggerUrl).then(response => {
      if (response.status == 200) {
        let swagger = response.data;
        var swaggerData = codegen.getViewForSwagger(
          { swagger: swagger, className: clsName },
          'typescript'
        );
        swaggerData.defaultDomain = this.props.swaggerUrl.replace('/swagger-ui.html', '');
        this.fs.copyTpl(
          this.templatePath(isTypescript ? 'ts.ejs' : 'js.ejs'),
          this.destinationPath(outPutFile),
          swaggerData
        );
      } else {
        console.error("can't fond swaager api-docs");
      }
    });
  }

  install() {
    // This.installDependencies();
  }
};
