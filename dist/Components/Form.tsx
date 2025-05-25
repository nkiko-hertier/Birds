import React, { useState, ReactNode } from 'react'

interface FormProps {
    children: ReactNode;
    title?: string;
    action?: string;
    Next?: ({}?) => {}; // Optional function to go to the next step
    update?: boolean
  }

function Form({children, title, action, Next, update}: FormProps) {

    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
      const form = e.target.form;
      setIsValid(form.checkValidity());
    };

    const [submit, setSubmit] = useState(false)
    const HandleSubmit = (e) => {
        try {
            setSubmit(true)
            e.preventDefault();
            const form = e.target;
            const json = Object.fromEntries(new FormData(form))
    
            fetch(action || 'byz.byz', {
                method: update ? 'PUT' : 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(json)
            }).then(res => res.json())
            .then((data) => {
                Next && (Next(data) || console.log('Sucessfully submitted'))
            })
    
            form.reset();
            setSubmit(false)
        } catch (error) {
            console.log('something went wrong!');
        }
    }
    return (
        <form onSubmit={HandleSubmit} onChange={handleChange} className='bg-[#161618] py-5 px-5 mx-5 mt-5 rounded-md' >
            <div className='p-2 flex items-center justify-between'>
                <h1 className='py-3 border-b w-fit text-left border-[#f97583]'>{title ?? 'Bird Form'}</h1>
            </div>
            {children}
            <div className='my-4'>
                <button disabled={!isValid} className='bg-[#ac5c5c] disabled:opacity-35 text-sm rounded-md  py-2 px-3 flex gap-2 items-center'>
                    {!submit ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cloud-upload" aria-hidden="true"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
                    :
                    <div className='border border-white size-4 rounded-full border-l-0 border-b-0 animate-spin'></div> }
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form