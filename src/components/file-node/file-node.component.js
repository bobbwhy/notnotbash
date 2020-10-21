
import React from 'react';


export const FileNode = props => {

  const { node } = props;

  const {
    group,
    isDirectory,
    itemCount,
    lastModified,
    name,
    nodeType,
    owner,
    sizeInBytes,
  } = node;

  return (
    <div className="file-node">
      <div className="node-type">{nodeType}</div>
      <div className="name">{name}</div>

    </div>
  )


}




