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
    <Stack spacing={4} height={size} width={size}>     
      <Avatar src={imageUrl} alt={altText} sx={{height:size,width:size}}/>
    </Stack>
    </>
  )

};

export default MiniteAvatar;
