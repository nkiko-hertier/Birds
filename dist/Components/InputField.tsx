import React from 'react'
interface Props {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    onInput?: any,
    required?: boolean,
    value?: string,
    options?: {
    basicKeys: [any, any];
    data: Record<string, any>[];
    }, 
}

function InputField({ label, name, type, placeholder, onInput, required, value }: Props) {
    return (
        <div className='b-field relative my-4'>
            <label htmlFor={name} className='text-sm absolute left-4 top-[-10px] text-zinc-500 bg-[#161618]'>{label}</label>
            <input onInput={onInput} type={type || 'text'} value={value} className='p-2 py-3 w-full border border-zinc-800 bg-transparent text-sm rounded-2xl outline-none px-5 block' placeholder={placeholder} required={required} />
        </div>
    )
}

export default InputField


export function SelectOptionField({ label, name, placeholder, onInput, required, value, options }: Props) {

    const KeyText = options?.basicKeys[0];
    const ValueText = options?.basicKeys[1];
    const Data = options?.data;

    return (
        <div className='b-field relative my-4'>
            <label htmlFor={name} className='text-sm absolute left-4 top-[-10px] text-zinc-500 bg-[#161618]'>{label}</label>
            <select required={required ?? true} value={value || 0} onInput={onInput} className='p-2 py-4 w-full border border-zinc-800 bg-transparent rounded-2xl text-sm outline-none px-5 block'>
                <option value='0' disabled >{ placeholder ?? 'select an item ...' }</option>
                { Data?.map((item, i) => <option key={i} value={item[KeyText]}>{item[ValueText]}</option>)}
            </select>
        </div>
    )
}