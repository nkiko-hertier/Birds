Testing version
```tsx
import React from 'react'
import Layouts from '../Components/Layout'
import TableMaker from '../Components/TableMaker'
import Form from '../Components/Form'
import InputField from '../Components/InputField'
import { SelectOptionField } from '../Components/InputField'
import { productsData, productsKeys } from '../utils'
import { icons } from 'lucide-react'

function Layout() {
    const links = [
        {label: 'Home', path: '', icon: <icons.House />}
    ]
  return (
    <Layouts links={links} title={'Dashboard'}>
        <TableMaker 
                data={productsData}
                rows={productsKeys}
                onEdit={(item)=> alert('hello there')} 
                onDelete={(item)=> alert('Are you sure you want to delete an item')} 
                index={undefined}
            />

            <Form title={'Add user'} action='http://localhost:3000/api'>
                <InputField label={'Full names'} name={'fullNames'} placeholder={'Enter full names...'} />
                <SelectOptionField label={'Class Room'} name={'class'} placeholder='Select a class room'  options={{basicKeys: ['id', 'name'], data: productsData, }} />
            </Form>
    </Layouts>
  )
}

export default Layout

```


my library index.js

```js
import Form from './dist/Components/Form.tsx'
import Provider from './dist/Components/Layout.tsx'
import Table from './dist/Components/TableMaker.tsx'
import Input, {SelectOptionField as Select} from './dist/Components/InputField.tsx'

const Birds = {Form, Provider, Table, Input, Select};
export default Birds; 
```