import { Space, Table, Tag,Anchor } from 'antd';
import React from 'react';
import ReactDOM from "react-dom";


const {Link} = Anchor;



function Myapp ({tabledata}){
  if (tabledata[0] == null){
    console.log("ruko jara ")
  }
  else{
    var column = tabledata[0]
    column[0]['render'] =  (text) => <a href={text} target='_blank'>{text.substring(        
      text.lastIndexOf("/", text.lastIndexOf("/") - 1) +1,
      text.lastIndexOf("/"))}</a>
  }

  return(
    <Table className='your-table'
    columns={column}
    dataSource={tabledata[1]}
    tableLayout='auto'
    scroll={{ x: 'max-content' }}

  />
  );
}
export default Myapp;