// src/app/components/[id]/page.tsx
import React from 'react';
import { fetchComponentById } from '@/frameworks/components/fetchComponent'; 
import ComponentPreview from '@/components/Component/ComponentPreview';

const ComponentDetailPage = async ({ params }:any) => {
    const { id } = params;
    const component:any = await fetchComponentById(id);
    return (<ComponentPreview component={component} />);
};

export default ComponentDetailPage;

