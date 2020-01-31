import grapesjs from 'grapesjs'; 

export default grapesjs.plugins.add('handlebar-plugin', (editor, options) => {
    console.log(options);
    //{ customField: 'customValue' }
  })