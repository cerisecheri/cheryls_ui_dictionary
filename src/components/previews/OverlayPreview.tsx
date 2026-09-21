'use client';
import React from 'react';
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function OverlayPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="font-heading bg-brand-yellow text-brand-dark font-black px-4 py-2 rounded-xl
                 active:scale-90 transition-all cursor-pointer hover:bg-[#FFD3D4] transition duration-200"
      >
        Open dialog
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity 
          data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-[20px] bg-brand-pink text-left shadow-xl 
              outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 
              data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg 
              data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-[#D8F8FF]/20 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="font-heading text-base font-semibold text-brand-dark">
                      Tada! you did it!
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="font-body text-sm text-brand-dark">
                        This is how overlay modal's look when opened on a screen. Click cancel to exit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="font-heading mt-3 inline-flex w-full justify-center  
                   text-sm font-semibold text-[#635db0] inset-ring inset-ring-white/5 
                   sm:mt-0 sm:w-auto transition duration-200 bg-[#FFD3D4] text-brand-dark font-black px-4 py-2 rounded-full
                 active:scale-90 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}