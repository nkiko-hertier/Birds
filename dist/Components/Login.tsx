import React from 'react'
import InputField from './InputField.tsx'

function Login() {
    const Bird = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-feather" aria-hidden="true"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>;
    const HandleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('nkiko3v3l0p3r', 'user');
        window.location.reload()
    }
  return (
    <div className='bg-[#161618] h-screen text-white flex justify-center flex-col items-center'>
        {Bird}
        <p className='mb-4 text-zinc-600'>Birds Auth</p>
        <form action="" onSubmit={HandleLogin}>
            <InputField label='email' name='email' placeholder='you@example.com' required={true} />
            <InputField label='password' name='password' type='password' placeholder='**************' required={true}/>
            <button className='p-2 mt-1 text-sm bg-white text-black rounded-2xl w-full'>Submit</button>
            <p className='text-sm text-zinc-500 mt-1 text-right'>Powered by <span className='text-[#ac5c5c]'>Nkiko Hertier</span></p>
        </form>

    </div>
  )
}

export default Login