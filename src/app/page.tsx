// src/app/page.tsx
import ComponentCard from '@/components/Component/ComponentCard';
import { fetchComponents } from '@/frameworks/components/fetchComponent';

const HomePage = async () => {

    const components:any = await fetchComponents(); 

    return (
        <div>
            <main className="p-4">
                <h1 className="text-2xl mb-4">Component Library</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {components?.map((component:any) => (
                        <ComponentCard key={component.id} component={component} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
