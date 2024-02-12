import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Art = () => {
    const [data, setData] = useState([]);
    const [editableRows, setEditableRows] = useState({});
    const [editedItemData, setEditedItemData] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [newArticleData, setNewArticleData] = useState({
        title: '',
        photo: '',
        submissionDate: '',
        description: '',
        content: '',
        onFront: false
    });

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/article");
            setData(res.data.articles);
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = async (index) => {
        try {
            if (editedItemData._id) {
                const res = await axios.put(`http://localhost:3000/article/${editedItemData._id}`, editedItemData);
                console.log("Data updated:", res.data);
                // Reset editedItemData after update
                setEditedItemData({});
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/article/${id}`);
            console.log("Item deleted:", res.data);
            // After deletion, you may want to refetch data to update the UI
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (index, item) => {
        setEditableRows({ ...editableRows, [index]: true });
        setEditedItemData(item); // Set the item being edited
    };

    const handleSave = (index) => {
        setEditableRows({ ...editableRows, [index]: false });
        updateData(index); // Pass the index to updateData function
    };

    const handleInputChange = (e, key) => {
        const value = e.target.value;
        setEditedItemData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleNewArticleInputChange = (e, key) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewArticleData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const addNewArticle = async () => {
        try {
            const res = await axios.post("http://localhost:3000/article", newArticleData);
            console.log("New article added:", res.data);
            // After adding a new article, you may want to close the popup and refresh the data
            togglePopup();
            fetchData();
            // Reset newArticleData
            setNewArticleData({
                title: '',
                photo: '',
                submissionDate: '',
                description: '',
                content: '',
                onFront: false
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='p-20'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={togglePopup}>Add New Article</button>
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Add New Article</h2>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                            <input type="text" id="title" value={newArticleData.title} onChange={(e) => handleNewArticleInputChange(e, 'title')} className="mt-1 block w-full border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL:</label>
                            <input type="text" id="photo" value={newArticleData.photo} onChange={(e) => handleNewArticleInputChange(e, 'photo')} className="mt-1 block w-full border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="submissionDate" className="block text-sm font-medium text-gray-700">Submission Date:</label>
                            <input type="date" id="submissionDate" value={newArticleData.submissionDate} onChange={(e) => handleNewArticleInputChange(e, 'submissionDate')} className="mt-1 block w-full border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                            <textarea id="description" value={newArticleData.description} onChange={(e) => handleNewArticleInputChange(e, 'description')} className="mt-1 block w-full border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
                            <textarea id="content" value={newArticleData.content} onChange={(e) => handleNewArticleInputChange(e, 'content')} className="mt-1 block w-full border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={addNewArticle}>Add</button>
                            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={togglePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

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
                                {editableRows[index] ? <input type="text" value={editedItemData.title || article.title} onChange={(e) => handleInputChange(e, 'title')} /> : article.title}
                            </td>
                            <td className='px-4 py-2 border'>
                                {editableRows[index] ? <input type="text" value={editedItemData.photo || article.photo} onChange={(e) => handleInputChange(e, 'photo')} /> : <img src={article.photo} alt={article.title} className='w-16 h-16 object-cover' />}
                            </td>
                            <td className='px-4 py-2 border'>
                                {editableRows[index] ? <input type="text" value={editedItemData.submissionDate || article.submissionDate} onChange={(e) => handleInputChange(e, 'submissionDate')} /> : article.submissionDate}
                            </td>
                            <td className='px-4 py-2 border'>
                                {editableRows[index] ? <input type="text" value={editedItemData.description || article.description} onChange={(e) => handleInputChange(e, 'description')} /> : (article.description.length > 50 ? article.description.substring(0, 50) + '...' : article.description)}
                            </td>
                            <td className='px-4 py-2 border'>
                                {editableRows[index] ? <input type="text" value={editedItemData.content || article.content} onChange={(e) => handleInputChange(e, 'content')} /> : (article.content.length > 50 ? article.content.substring(0, 50) + '...' : article.content)}
                            </td>
                            <td className='px-4 py-2 border'>
                                {editableRows[index] ? <input type="text" value={editedItemData.onFront || article.onFront} onChange={(e) => handleInputChange(e, 'onFront')} /> : (article.onFront ? 'Yes' : 'No')}
                            </td>
                            <td className='px-4 py-2 border'>
                                {editableRows[index] ? <button className='mr-2 bg-blue-500 text-white px-4 py-2 rounded' onClick={() => handleSave(index)}>Save</button> : <button className='mr-2 bg-blue-500 text-white px-4 py-2 rounded' onClick={() => handleEdit(index, article)}>Edit</button>}
                                <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => deleteItem(article._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Art;
