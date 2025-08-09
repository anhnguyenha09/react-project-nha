// ===== src/components/Body.js =====
import React from 'react';

export default function Body() {
    //useState
    const a = 3;
    const fullName = 'HaAnh';
    let age = 20;
    let className = 'IT';
    let school = 'NEU';

    return (
        <div>
            <h1>Họ và tên: ${fullName}</h1>
            <h1>Tuổi: ${age}</h1>
            <h1>Tên lớp: ${className}</h1>
            <h1>Tên trường: ${school}</h1>
        </div>
        // <main className="site-body">
        //     <div className="container">
        //         <section className="hero">
        //             <h2>Welcome to the simple layout</h2>
        //             <p>This is a lightweight example using plain CSS and React components.</p>
        //         </section>

        //         <section className="content">
        //             <h3>Content area</h3>
        //             <p>
        //                 Add your components, cards, lists, or whatever you need here. This
        //                 area grows with content and will remain between the header and footer.
        //             </p>
        //         </section>
        //     </div>
        // </main>
    );
}
