const fakeData = [
    {
        id:1,
        name: 'Cardiology',
        doctors:'Prof. Dr. A.H.M. waliul islam, Prof.Dr. M A Baqui',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJl6iQTllqvpFGJszYtuWbXwvo8kqLWTvYg&usqp=CAU',
        details:'A cardiologist is a healthcare provider who had extra training to treat a problrms of the heart and blood vessels. A cardiologist has at least 10 years of medical training. A cardiologist must then pass a test from the American Board of Internal Medicine (ABIM) in cardiology. They are then a board-certified cardiologist.',
        ratings: 4.5

    },
    {
        id:2,
        name:'Gynecology',
        doctors: 'Dr. Halima Akhter, Dr. Ahsrafi Ahmed',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V0kczYcryTGO5horsjrPRtv21ZfIUS7iIg&usqp=CAU',
        details: 'Gynecologists are doctors who specialize in women’s health, with a focus on the female reproductive system.They deal with a wide range of issues, including obstetrics, or pregnancy and childbirth, menstruation and fertility issues, sexually transmitted infections (STIs), hormone disorders, and others.',
        ratings:5
    },
    {
        id:3,
        name:'Darmatology',
        doctors: 'Dr. Rohima Akhter, Dr. Shamsujjoha Ahmed',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiOTku8wfdk8ZeYLzAHzmzOqe3fstH6fWBA&usqp=CAU',
        details: 'A dermatologist is a type of doctor that diagnoses and treats conditions that affect your hair, skin, and nails. They also treat conditions that affect mucous membranes, or the delicate tissue that lines your nose, mouth, and eyelids.',
        ratings:4.5
    },
    {
        id:4,
        name:'Psychiatry',
        doctors: 'Dr. Nasrin Begum, Dr. Ahsraf Chowdhury',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsjn-DDlNaKNwY7ZlECMymGec07Qsgc8rCg&usqp=CAU',
        details: 'Psychiatry is the branch of medicine focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders. A psychiatrist is a medical doctor (an M.D. or D.O.) who specializes in mental health, including substance use disorders. Psychiatrists are qualified to assess both the mental and physical aspects of psychological problems.',
        ratings:5
    },
    {
        id:5,
        name:'Neurology',
        doctors: 'Dr. Hasna Banu, Dr. Medha Kundu',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2evFz1jUEAkw2cvxLm1LMwCID4V6wCZW7Q&usqp=CAU',
        details: 'Neurologists are doctors who diagnose and treat problems with the brain and nervous system. They donot do surgery. Your doctor might recommend that you see one if they think you have an illness that needs expert care.A neurologist has at least a college degree and 4 years of medical school plus a 1 year internship and 3 years of special training in neurology. Many also spend extra time learning about a specific field, like movement disorders or pain management.',
        ratings:4
    },
    {
        id:6,
        name:'Nutritionists',
        doctors: 'Dr. Hazari Datta, Dr. Muskan Ara',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4Xs1CssQ4NicOILjMMqlOtNkwdZw6v82bQ&usqp=CAU',
        details: 'A nutritionist, dietitian-nutritionist, nutriologist, dietitian, or dietologist is a person who advises others on matters of food and nutrition and their impacts on health. Some people specialize in particular areas, such as sports nutrition, public health, or animal nutrition, among other disciplines. In many countries, a person can claim to be a nutritionist even without any training, education, or professional license, in contrast to a dietitian, who has a university degree, professional license, and certification for professional practice.',
        ratings:5
    },
    {
        id:7,
        name:'Dentist',
        doctors: 'Dr. Ferdousi Begum, Dr. Abdullah Al Bari',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhYRCtCOwXN5O2nBWpsSbhaiAc2PMrrxi1w&usqp=CAU',
        details: 'Dentists remove tooth decay, fill cavities, and repair fractured teeth. Dentists diagnose and treat problems with patients teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth and gums and on diet choices that affect oral health.',
        ratings:5
    },
    {
        id:8,
        name:'Orthopedic',
        doctors: 'Dr. Mehbuba Sharmin, Dr. Md. Akash Alom',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT_fZbMx7c_OlBOyBYFq6J2NhHCrqEyzTcA&usqp=CAU',
        details: 'Orthopedic surgeons are doctors who specialize in the musculoskeletal system - the bones, joints, ligaments, tendons, and muscles that are so essential to movement and everyday life. With more than 200 bones in the human body, its an in-demand specialty. Dislocated joints.',
        ratings: 4.5
    },
    {
        id:9,
        name:'Radiologists',
        doctors: 'Dr. Md. Mohaiminul Islam, Dr. Kanak Das',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGBwMYwPk2FBdxmO0-yhay8h3VpLuKAEd3A&usqp=CAU',
        details: 'Radiologists are medical doctors that specialize in diagnosing and treating injuries and diseases using medical imaging (radiology) procedures (exams/tests) such as X-rays, computed tomography (CT), magnetic resonance imaging (MRI), nuclear medicine, positron emission tomography (PET) and ultrasound.',
        ratings:5
    },
    {
        id:10,
        name:'Anesthesiologists',
        doctors: 'Dr. Junaida Akhter, Dr. Shohag Ahmed',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_jx8GX9wzJFQ_ly0euqiYNPHAE-Xt9soBw&usqp=CAU',
        details: 'Physician anesthesiologists evaluate, monitor, and supervise patient care before, during, and after surgery, delivering anesthesia, leading the Anesthesia Care Team, and ensuring optimal patient safety. Physician anesthesiologists specialize in anesthesia care, pain management, and critical care medicine.',
        ratings:5
    },
    {
        id:11,
        name:'Oncologists',
        doctors: 'Dr. Meherima Khatun, Dr. Dina Ahmed',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyAFTCJaAid4ecfdjZo5a_9ia--9VqehidQ&usqp=CAU',
        details: 'An oncologist is a doctor who treats cancer and provides medical care for a person diagnosed with cancer. An oncologist may also be called a cancer specialist. The field of oncology has 3 major areas based on treatments: medical oncology, radiation oncology, and surgical oncology.',
        ratings: 4.5
    },
    {
        id:12,
        name:'Rheumatologist',
        doctors: 'Dr. Barsha Ahmed, Dr. Tanvir Rahman',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwFQ_6798ovPhQ29qZmUSmbwTKIPtWOPCKQ&usqp=CAU',
        details: 'A rheumatologist is a board certified internist or pediatrician who is qualified by additional training and experience in the diagnosis and treatment of arthritis and other diseases of the joints, muscles, and bones.',
        ratings: 4
    },

]