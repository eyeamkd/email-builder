
 grapesjs.plugins.add('grapesjs-handlebar', (editor,opts)=>{ 
   console.log(editor,opts);
    // editor.DomComponents.addType('var-placeholder', {
    //     model: {
    //       defaults: {
    //         textable: 1,
    //         placeholder: 'VARIABLE-1',
    //       },
    //       toHTML() {
    //         return `{{ ${this.get('placeholder')} }}`;
    //       },
    //     },
    //     // The view below it's just an example of creating a different UX
    //     view: {
    //       tagName: 'span',
    //       events: {
    //         'change': 'updatePlh',
    //       },
    //       // Update the model once the select is changed
    //       updatePlh(ev) {
    //         this.model.set({ placeholder: ev.target.value });
    //         this.updateProps();
    //       },
    //       // When we blur from a TextComponent, all its children components are
    //       // flattened via innerHTML and parsed by the editor. So to keep the state
    //       // of our props in sync with the model so we need to expose props in the HTML
    //       updateProps() {
    //         const { el, model } = this;
    //         el.setAttribute('data-gjs-placeholder',  model.get('placeholder'));
    //       },
    //       onRender() {
    //         const { model, el } = this;
    //         const currentPlh = model.get('placeholder');
    //         const select = document.createElement('select');
    //         const options = [ 'VARIABLE-1', 'VARIABLE-2', 'VARIABLE-3' ];
    //         select.innerHTML = options.map(item => `<option value="${item}" ${item === currentPlh ? 'selected' : ''}>
    //           ${item}
    //         </option>`).join('');
    //         while (el.firstChild) el.removeChild(el.firstChild);
    //         el.appendChild(select);
    //         select.setAttribute('style', 'padding: 5px; border-radius: 3px; border: none; -webkit-appearance: none;');
    //         this.updateProps();
    //       },
    //     }
    //   });
})