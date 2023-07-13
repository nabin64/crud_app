import Image from 'next/image'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import { BiUserPlus, BiX, BiCheck } from 'react-icons/bi';
import Form from '@/components/form';
import Table from '@/components/table';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toogleChangeAction, deleteAction } from '@/redux/reducer';
import { deleteUser, getUsers } from '@/lib/helper';
import { useQueryClient } from 'react-query';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const visible = useSelector((state) => state.app.client.toogleForm)
  const deleteId = useSelector((state) => state.app.client.deleteId)
  const queryclient = useQueryClient();
  const dispatch = useDispatch()

  // const handler = () => {
  //   setVisible(!visible)
  // }

  const cancelHandler = async () => {
    console.log("cancel")
    await dispatch(deleteAction(null))

  }

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId)
      await queryclient.prefetchQuery('users', getUsers)
      await dispatch(deleteAction(null))
    }
  }




  return (
    <section>
      <Head>
        <title>Crud Operation</title>
      </Head>
      <main>
        <h1 className=' md:text-5xl text-center font-bold py-5'> Employee Management</h1>
        <div className='container  mx-auto flex justify-between py-5 border-5' >
          <div className='left flex gap-3 '>
            <button onClick={() => dispatch(toogleChangeAction())} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-100 hover:border-indigo-500 hover:text-gray-500'>
              Add Employee <span className='px-1'><BiUserPlus size={20} /></span>
            </button>
          </div>
          {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>
        {/* collapsable form */}
        <div className='container mx-auto py-5'>
          {visible ? <Form /> : <></>}

        </div>


        <div className='container mx-auto'>
          {/* table */}
          <Table />
        </div>
      </main>

    </section>
  )
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="flex gap-5">
      <button> Are yuo Sure ?</button>
      <button onClick={deleteHandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>Yes <span className='pt-1'><BiX /></span> </button>
      <button onClick={cancelHandler} className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50">No <span className='pt-1'><BiCheck /></span> </button>

    </div>
  )
}