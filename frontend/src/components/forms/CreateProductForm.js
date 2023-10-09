import React, {useMemo, useState} from 'react'
import { StyledForm } from '../styles/Forms.styled'
import { ImageUpload, StyledCreateProduct } from '../styles/Product.styled';
import Input from './Input';
import Api from '../../utils/Api';
import Select from 'react-select';
import {categories} from '../../utils/constants';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../features/products/productSlice';
import { Loader } from '../styles/Global.styled';

export default function CreateProductForm() {
  const [image_url, set_image_url] = useState(null);
  const [option, setOption] = useState('');
  const options = useMemo(() => 
    categories.map((category, i) => ({ value: i, label: category }) ), []);
  
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.products);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
    });
    setOption('');
    set_image_url(null);
  }

  const { name, description, price } = formData;

  const onUpload = async (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append("image", file);

    const res = await Api.get("/api/products/upload_image");
    const url = res.data.url;

    await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: file,
    });

    const imageUrl = url.split('?')[0];
    set_image_url(imageUrl);

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const categoryChangeHandler = value => {
    setFormData({
      ...formData,
      category: value.label,
    });
    setOption(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProduct({ ...formData, image_url: image_url }));

    resetForm();
    console.log(formData);
  }

  return (
    <StyledCreateProduct>
        <ImageUpload>
          <img 
            src={image_url ? image_url : 'image-placeholder.png'}
            alt='product'
            className='product-image'
          />
          <input 
            type='file'
            onChange={onUpload}
          />
        </ImageUpload>
        <StyledForm onSubmit={handleSubmit}>
          <Input 
            placeholder="name"
            type='text'
            name={'name'}
            value={name}
            handleChange={handleChange}
          />
          <textarea 
            placeholder='description'
            value={description}
            onChange={handleChange}
            name='description'
          />
          <Input 
            placeholder='price'
            type='number'
            name="price"
            value={price}
            handleChange={handleChange}
          />
          <Select 
          options={options}
          value={option}
          placeholder="Categories"
          onChange={categoryChangeHandler}
          />

          <Button>
            {!isLoading && "Save"}
            {isLoading && <Loader size={15}/>}
          </Button>
        </StyledForm>
    </StyledCreateProduct>
  )
}
