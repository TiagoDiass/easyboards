module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Interface component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'generators-templates/component.tsx.hbs'
      },

      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'generators-templates/component.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'generators-templates/component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'generators-templates/component.stories.tsx.hbs'
      }
    ]
  });
};
