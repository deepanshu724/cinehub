import React from 'react';
import { helix } from 'ldrs'

helix.register()

const Loading = () => {
  return (
    <div className='w-full h-full flex  items-center justify-center'>
<l-helix
  size="200"
  speed="3" 
  color="white" 
></l-helix>
</div>
  );
};

export default Loading;
