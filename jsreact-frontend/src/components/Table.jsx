import axios from 'axios'
import { useState, useEffect } from 'react'

const url = 'https://randomuser.me/api/?results=20'

export function Table () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setUsers(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

   return (
    <div className="overflow-x-auto  m-8 lg:m-24 ">
    <table className="table table-normal w-full">
       {/* head  */}
      <thead >
        <tr>
          <th className='text-Verde-900 '>Nome</th>
          <th className='text-Verde-900 '>E-mail</th>
          <th className='text-Verde-900 '>Username</th>
          <th className='text-Verde-900 '>Idade</th>
        </tr>
      </thead>
      <tbody>

      
        {users.map( user => {
            return (
                
             <tr key={user.login.username}>
                
                {/* Nome */}
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user.picture.thumbnail} alt="Thumbnail do User" />
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-Verde-900">{user.name.first} {user.name.last} </div>
                            
                        </div>
                    </div>
                </td>
                
                {/* E-mail */}
                <td>
                    <span className="font-light text-Verde-900">{user.email}</span>
                </td>
                
                {/* Username */}
                <td>
                    <span className="font-light text-Verde-900">{user.login.username}</span>
                </td>
                
                {/* Idade */}
                <td>
                    <span className="font-light text-Verde-900">{user.dob.age}</span>
                </td>
           </tr> 
            )
        })}
            
            
    {/* row 1  */}
        
      
      </tbody>
      {/* foot */}
      <tfoot>
      <tr>
          <th className='text-Verde-900'>Nome</th>
          <th className='text-Verde-900'>E-mail</th>
          <th className='text-Verde-900'>Username</th>
          <th className='text-Verde-900'>Idade</th>
        </tr>
      </tfoot>
      
    </table>
  </div>
   )
}