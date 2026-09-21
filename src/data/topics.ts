export type Topic = {
    slug: string;
    title: string;
    description: string;
    code: string;
    explanation: string;
}

export const topics: Topic[] = [
{
    slug: 'buttons',
    title: 'Buttons',
    description: 'button grid',
    code: 
    `const [clicked, setClicked] = useState(false);
    
      return (
        <button
          onClick={() => setClicked(!clicked)}
          className="bg-brand-pink text-brand-dark font-black px-4 py-2 rounded-xl
                     active:scale-90 transition-all cursor-pointer hover:bg-[#FFD3D4]"
        >
          {clicked ? 'Tada!' : 'Click me'}
        </button>
      );`,
      explanation: 'Buttons are used for many things in CSS. To create a button in CSS, use the  <button> tag! Styling can be done with an id in CSS and classname= in Tailwind. Buttons can be styled and animated, they can be linked to different pages and attributes. Buttons are present on nearly every website found and are the foundation of CSS styling. Understanding buttons is critical to a UI developers journey.', 
},






{
    slug: 'overlays',
    title: 'Overlays',
    description: 'Overlays are use for...',
    code: 
    `return (
        <div>
          <button
            onClick={() => setOpen(true)}
            className="bg-brand-pink text-brand-dark font-black px-4 py-2 rounded-xl..."
          >
            Open dialog
          </button>
          <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-900/50 transition-opacity 
              data-closed:opacity-0 data-enter:duration-300 ..."
            />
    
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end ...">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-brand-pink text-left shadow-xl 
                  outline -outline-offset-1..."
                >
                  <div className="bg-[#D8F8FF]/20 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold text-brand-dark"> Tada! you did it! </DialogTitle>
                        <div className="mt-2">
                          <p className="text-sm text-brand-dark"> This is how overlay modal's look when opened on a screen. Click cancel to exit! </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex w-full justify-center  
                       text-sm font-semibold text-[#635db0] cursor-pointer hover:bg-[#FFD3D4] ..."
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel> ...
      );`, 
      explanation: 'Overlays appear as popups on a screen. They are usually triggered by clicking a button. When opened, overlays will display a message, whether that may be a warning or a short message. Clicking out requires clicking another button or, sometimes, clicking outside of the overlay itself.',
},





{
    slug: 'forms',
    title: 'Forms',
    description: 'forms take inputs and stuff',
    code: ` <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-brand-dark">
                Email
              </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                       name="first-name"
                       type="text"
                       autoComplete="given-name"
                       className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-brand-dark/20 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                       />
                   </div>
              /div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-brand-dark">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-brand-dark/20 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>`,
            explanation: 'Forms in CSS are a simple way to add input from a user. They can go from being extremely simple (like the one showcased here) or extremely intricate. For this reason, forms are some of the most flexible and dynamic features of HTML and CSS. Transitioning into security and authorization also requires knowledge of forms so that user input is safely tracked and recorded.', 
},





{
    slug: 'navigation',
    title: 'Navigation',
    description: 'Navigation bars are use for...',
    code: `<nav className="flex gap-4 bg-brand-dark p-4 rounded-xl">
    <a href="#" className="text-brand-yellow font-black">Home</a>
    <a href="#" className="text-brand-yellow font-black">About</a>
</nav>`, 
    explanation: 'The <nav> tag in HTML works similar the div, the only difference being the semantics. A <div> is a generic container whereas the <na> tag specifically lets the browser know the links held inside are major navigation links. Nav tags are great for understanding the skeleton of a website and how to build on top of what you have. ',
},



{
    slug: 'toggle',
    title: 'Toggles',
    description: 'Toggles are buttons that....',
    code: `<button
  onClick={() => setEnabled(!enabled)}
  className={\`w-14 h-8 rounded-full flex items-center px-1 transition-colors \${
    enabled ? 'bg-brand-pink justify-end' : 'bg-brand-dark/30 justify-start'
  }\`}
>
  <span className="w-6 h-6 bg-brand-dark rounded-full" />
</button>`, 
    explanation: 'ok here again',
},



{
    slug: 'notification',
    title: 'Notification Toast',
    description: 'Navigation bars are use for...',
    code: `<nav className="flex gap-4 bg-brand-dark p-4 rounded-xl">
        <a href="#" className="text-brand-yellow font-black">Home</a>
        <a href="#" className="text-brand-yellow font-black">About</a>
      </nav>`, 
    explanation: 'ok here again',
},



{
    slug: 'navigation4',
    title: 'Placeholder',
    description: 'Navigation bars are use for...',
    code: `<button className="bg-brand-pink text-brand-dark font-black px-4 py-2 rounded-xl">
  Click me
</button>`,
    explanation: 'ok here again', 
},

];