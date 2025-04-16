import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, message } from 'antd';

const { Column, ColumnGroup } = Table;

const initialData = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
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
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
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