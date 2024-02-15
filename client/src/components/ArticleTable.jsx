import React from 'react';

const ArticleTable = ({
    data,
    editableRows,
    handleInputChange,
    handleFileInputChange,
    handleDragOver,
    handleDrop,
    editedItemData,
    handleSave,
    handleEdit,
    deleteItem
}) => {
    return (
        <table className='mt-24 w-full table-auto'>
            <thead>
                <tr>
                    <th className='px-4 py-2 border'>Title</th>
                    <th className='px-4 py-2 border'>Photo</th>
                    <th className='px-4 py-2 border'>Submission Date</th>
                    <th className='px-4 py-2 border'>Description</th>
                    <th className='px-4 py-2 border'>Content</th>
                    <th className='px-4 py-2 border'>On Front</th>
                    <th className='px-4 py-2 border'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((article, index) => (
                    <tr key={article._id}>
                        <td className='px-4 py-2 border'>
                            {editableRows[index] ? (
                                <input
                                    type="text"
                                    value={editedItemData.title || article.title}
                                    onChange={(e) => handleInputChange(e, 'title')}
                                />
                            ) : (
                                article.title
                            )}
                        </td>
                        <td className='px-4 py-2 border' onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index)}>
                            {editableRows[index] ? (
                                <input type="file" onChange={(e) => handleFileInputChange(e, 'photo')} />
                            ) : (
                                <img src={article.photo} alt={article.title} className='w-16 h-16 object-cover' />
                            )}
                        </td>
                        <td className='px-4 py-2 border'>
                            {editableRows[index] ? (
                                <input
                                    type="text"
                                    value={editedItemData.submissionDate || article.submissionDate}
                                    onChange={(e) => handleInputChange(e, 'submissionDate')}
                                />
                            ) : (
                                article.submissionDate
                            )}
                        </td>
                        <td className='px-4 py-2 border'>
                            {editableRows[index] ? (
                                <input
                                    type="text"
                                    value={editedItemData.description || article.description}
                                    onChange={(e) => handleInputChange(e, 'description')}
                                />
                            ) : article.description.length > 50 ? (
                                article.description.substring(0, 50) + '...'
                            ) : (
                                article.description
                            )}
                        </td>
                        <td className='px-4 py-2 border'>
                            {editableRows[index] ? (
                                <input
                                    type="text"
                                    value={editedItemData.content || article.content}
                                    onChange={(e) => handleInputChange(e, 'content')}
                                />
                            ) : article.content.length > 50 ? (
                                article.content.substring(0, 50) + '...'
                            ) : (
                                article.content
                            )}
                        </td>
                        <td className='px-4 py-2 border'>
                            {editableRows[index] ? (
                                <input
                                    type="text"
                                    value={editedItemData.onFront || article.onFront}
                                    onChange={(e) => handleInputChange(e, 'onFront')}
                                />
                            ) : article.onFront ? (
                                'Yes'
                            ) : (
                                'No'
                            )}
                        </td>
                        <td className='px-4 py-2 border'>
                            {editableRows[index] ? (
                                <button className='mr-2 bg-blue-500 text-white px-4 py-2 rounded' onClick={() => handleSave(index)}>
                                    Save
                                </button>
                            ) : (
                                <button className='mr-2 bg-blue-500 text-white px-4 py-2 rounded' onClick={() => handleEdit(index, article)}>
                                    Edit
                                </button>
                            )}
                            <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => deleteItem(article._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ArticleTable;
