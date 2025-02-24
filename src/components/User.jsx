import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function user({user,onDelete,onEdit}) {
    return(  
        <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="py-4 px-6">{user.first_name}</td>
          <td className="py-4 px-6">{user.id}</td>
          <td className="py-4 px-6">{user.last_name}</td>
          <td className="py-4 px-6">{user.email}</td>
          <td className="py-4 px-6">{user.phone}</td>
          <td className="py-4 px-6">
            <button className="text-blue-500 hover:text-blue-700">
<EditIcon  onClick={() => onEdit(user)}/>
            </button>
            <button   onClick={() => onDelete(user.id)} className="text-red-500 hover:text-red-700 ml-4">
<DeleteIcon/>
            </button>
          </td>
        </tr>
    )
}
user.protoTypes ={
    user:PropTypes.user,
    onDelete: PropTypes.onDelete,
    onEdit: PropTypes.onEdit,
   
}
export default user