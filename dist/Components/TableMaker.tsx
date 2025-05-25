import React, { useState } from 'react'
import { SearchInItems, Sort } from '../utils';

function TableMaker({ data, rows, onEdit, onDelete, index }) {

    const [items, setItems] = useState(data || []);
    const [search, setSearch] = useState([]);
    const [keyword, setKeyword] = useState('');

    if (index == undefined) index = 1;
    const cols = rows.length + ((!onDelete && !onEdit) ? 0 : 1) + (index ? 1 : 0);
    const colsClass = 'grid-cols' + cols;

    return (
        <div className='bg-[#161618] min-h-[50px] mt-4 rounded-md mx-5 p-2'>
            <div className='p-2 flex items-center justify-between'>
                <h1 className='py-3 border-b w-fit text-left border-[#f97583]'>Products List</h1>
                <div className='border-zinc-800 border-1 rounded-2xl flex items-center px-4'>
                    <input type="text" value={keyword} 
                        onChange={(e) => {
                            const val = e.target.value;
                            setKeyword(val);
                            setSearch(SearchInItems(items, val));}} 
                        className='p-2 h-fit text-sm outline-none' placeholder='search by keyword ...' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                </div>
            </div>

            <div className='overflow-x-auto'>
                <div className={'p-3 max-md:w-[600px]'}>
                    <div style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} className={`grid *:p-3 text-zinc-300 border-[#f97583] bg-[#f9758212] rounded-t-2xl border-b`}>
                        {index ? <div>Id</div> : ''}
                        {rows.map((key) => (
                            <div
                                key={key}
                                className="cursor-pointer flex items-center gap-2"
                                onClick={() => {
                                    setItems(Sort(items, key));
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-wide-narrow" aria-hidden="true"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="M11 4h10"></path><path d="M11 8h7"></path><path d="M11 12h4"></path></svg>
                                {key}
                            </div>
                        ))}
                        {(!onDelete && !onEdit) ? '' : <div>Actions</div>}
                    </div>
                    {(keyword ? search : items).map((item, i) =>
                        <div key={i} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} className={`grid text-left *:p-3 text-zinc-300 border-zinc-700 border-b`}>
                            {index ? <div>{i + 1}</div> : ''}
                            {rows.map((row, i) => 
                                <div key={i}>
                                    <p className='line-clamp-1'>{item[row]}</p>
                                </div>
                            )}
                            <div className='flex gap-2'>
                                {!onEdit ? '' : <button onClick={() => onEdit(item)} className='bg-[#5c5cac] h-fit text-sm rounded-md py-1 px-3 flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pen" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                                     Edit</button>}
                                {!onDelete ? '' : <button onClick={() => onDelete(item)} className='bg-[#ac5c5c] h-fit text-sm rounded-md py-1 px-3 flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2 lucide-trash-2" aria-hidden="true"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                     Delete</button>}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default TableMaker