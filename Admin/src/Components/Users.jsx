import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, message } from 'antd';
import axios from 'axios';

const { Column, ColumnGroup } = Table;

const initialData = [
  {
    key: '1',
   username:"john",
   email: 'john@example.com',
   Password: '4435325346',
   phone:"543543543543",
   role: ['admin','user'],
   tags: ['admin,user'],


  },
  {
    key: '2',
    username:"jim",
   email: 'john@4example.com',
   Password: '44353256',
   phone:"5435435435",
   role: ['admin,user'],
   tags: ['admin,user'],

  },
  {
    key: '3',
    username:"josh",
   email: 'john@3example.com',
   Password: '44353256',
   phone:"5435435435",
   role: ['admin','user'],
   tags: ['admin,user'],
  },
];

const Users = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios.get ("http://localhost:5000/api")
  }, []);  

  // Handle Delete
  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    message.success('User deleted successfully!');
  };

  // Handle Edit (for now, just log the record)
  const handleEdit = (record) => {
    message.info(`Editing user: ${record.firstName} ${record.lastName}`);
    console.log('Edit user:', record);
  };

  // Handle Refresh
  const handleRefresh = () => {
    setData(initialData);
     
    message.success('Table refreshed!');
  };

  return (
    <div>
      <div style={{ marginBottom: '16px', textAlign: 'right' }}>
        <Button type="primary" onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <Table dataSource={data}>
       
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(role) => (
            <>
              {(role || []).map((role) => {
                let color = role.length > 5 ? 'admin' : 'user';
                if (role === 'user') {
                  color = 'green';
                }
                return (
                  <Tag color={color} key={role}>
                    {role.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="link" onClick={() => handleEdit(record)}>
                Edit
              </Button>
              <Button type="link" danger onClick={() => handleDelete(record.key)}>
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Users;