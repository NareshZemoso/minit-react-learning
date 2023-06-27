import { Avatar, Stack } from '@mui/material';
import React from 'react';

interface AvatarProps {
  imageUrl: string;
  altText?: string;
  size?: number;
}

const MiniteAvatar: React.FC<AvatarProps> = ({ imageUrl, altText = 'Avatar', size = 50 }) => {
  return (
    <>
    <Stack spacing={4}>     
      <Avatar src={imageUrl} />
    </Stack>
    </>
  )

};

export default MiniteAvatar;
