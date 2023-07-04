import { Avatar, Stack } from '@mui/material';
import React from 'react';

interface AvatarProps {
  imageUrl: string;
  altText?: string;
  size?: number;
}

const MiniteAvatar: React.FC<AvatarProps> = ({ imageUrl, altText = 'Avatar', size = 32 }) => {
  return (
    <>
    <Stack spacing={4}>     
      <Avatar src={imageUrl} alt={altText}/>
    </Stack>
    </>
  )

};

export default MiniteAvatar;
