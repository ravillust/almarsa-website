import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useClassData() {
  const route = useRoute();

  const classesData = {
    'aerobik': {
      name: 'Senam Aerobik',
      tagline: 'Bakar kalori dengan gerakan dinamis dan musik energik',
      heroImage: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&h=600&fit=crop',
      description: 'Senam Aerobik adalah latihan kardiovaskular yang menggabungkan gerakan ritmis dengan musik yang energik. Kelas ini dirancang untuk meningkatkan kebugaran kardiovaskular, membakar kalori, dan meningkatkan stamina Anda. Dengan gerakan yang mudah diikuti namun efektif, kelas ini cocok untuk semua level fitness.',
      level: 'Pemula - Menengah',
      duration: '50 menit',
      calories: '400-500 kalori',
      capacity: '20',
      benefits: [
        'Meningkatkan kesehatan jantung dan paru-paru',
        'Membakar kalori dan membantu penurunan berat badan',
        'Meningkatkan stamina dan energi',
        'Memperbaiki koordinasi tubuh',
        'Mengurangi stress dan meningkatkan mood'
      ],
      equipment: ['Sepatu olahraga', 'Handuk', 'Botol minum', 'Pakaian nyaman'],
      schedules: [
        { day: 'Senin', time: '07:00 - 07:50', instructor: 'Mira Kusuma', quota: 8 },
        { day: 'Rabu', time: '18:00 - 18:50', instructor: 'Fitri Handayani', quota: 5 },
        { day: 'Jumat', time: '07:00 - 07:50', instructor: 'Mira Kusuma', quota: 12 }
      ],
      instructor: {
        name: 'Mira Kusuma',
        photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&h=200&fit=crop',
        bio: 'Instruktur bersertifikat dengan 8 tahun pengalaman dalam senam aerobik. Passionate dalam membantu member mencapai target fitness mereka.',
        certifications: ['Certified Aerobic Instructor', 'Group Fitness Trainer', 'CPR Certified']
      },
      testimonials: [
        { name: 'Sarah Wijaya', review: 'Kelas aerobik dengan Kak Mira sangat menyenangkan! Musiknya energik dan gerakannya mudah diikuti. Saya sudah turun 5kg dalam 2 bulan!' },
        { name: 'Rina Sari', review: 'Instructor-nya sabar dan perhatian. Cocok banget buat pemula kayak saya. Sekarang stamina saya jauh lebih bagus!' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 75.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 500.000', description: 'Hemat Rp 100.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    },
    'yoga': {
      name: 'Yoga & Stretching',
      tagline: 'Tingkatkan kelenturan dan ketenangan pikiran',
      heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop',
      description: 'Kelas Yoga & Stretching menggabungkan pose-pose yoga tradisional dengan teknik peregangan yang mendalam. Fokus pada pernapasan, keseimbangan, dan fleksibilitas untuk menciptakan harmoni antara tubuh dan pikiran. Kelas ini cocok untuk semua level dan sangat efektif untuk mengurangi stress.',
      level: 'Pemula',
      duration: '60 menit',
      calories: '200-300 kalori',
      capacity: '15',
      benefits: [
        'Meningkatkan fleksibilitas dan keseimbangan tubuh',
        'Mengurangi stress dan kecemasan',
        'Memperbaiki postur tubuh',
        'Meningkatkan kualitas tidur',
        'Memperkuat otot inti'
      ],
      equipment: ['Matras yoga', 'Handuk', 'Botol minum', 'Pakaian stretchy'],
      schedules: [
        { day: 'Selasa', time: '06:00 - 07:00', instructor: 'Luna Kartika', quota: 6 },
        { day: 'Kamis', time: '18:30 - 19:30', instructor: 'Dewi Kusumawati', quota: 4 },
        { day: 'Sabtu', time: '08:00 - 09:00', instructor: 'Luna Kartika', quota: 10 }
      ],
      instructor: {
        name: 'Luna Kartika',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
        bio: 'Yoga instructor bersertifikat RYT 200 dengan spesialisasi Hatha dan Vinyasa Yoga. Berpengalaman 6 tahun dalam mengajar yoga untuk berbagai level.',
        certifications: ['RYT 200 Yoga Alliance', 'Meditation Teacher', 'Prenatal Yoga Certified']
      },
      testimonials: [
        { name: 'Dian Puspita', review: 'Kelas yoga dengan Kak Luna sangat menenangkan. Saya jadi lebih rileks dan tidur lebih nyenyak setelah rutin ikut kelas ini.' },
        { name: 'Maya Indah', review: 'Instrukturnya sangat sabar dalam membimbing pose-pose yoga. Cocok banget buat pemula yang baru mulai yoga.' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 85.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 600.000', description: 'Hemat Rp 80.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    },
    'zumba': {
      name: 'Zumba',
      tagline: 'Dance your way to fitness!',
      heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop',
      description: 'Zumba adalah program fitness yang menggabungkan gerakan tari Latin dan internasional dengan musik yang energik dan menyenangkan. Rasakan sensasi berdansa sambil membakar kalori! Kelas ini dirancang untuk semua orang tanpa memerlukan pengalaman menari sebelumnya.',
      level: 'Pemula - Menengah',
      duration: '45 menit',
      calories: '500-700 kalori',
      capacity: '25',
      benefits: [
        'Membakar kalori dengan cara yang menyenangkan',
        'Meningkatkan koordinasi dan ritme tubuh',
        'Workout untuk seluruh tubuh',
        'Meningkatkan mood dan mengurangi stress',
        'Meningkatkan kepercayaan diri'
      ],
      equipment: ['Sepatu olahraga', 'Handuk', 'Botol minum', 'Pakaian olahraga nyaman'],
      schedules: [
        { day: 'Senin', time: '18:00 - 18:45', instructor: 'Dian Permata', quota: 10 },
        { day: 'Rabu', time: '19:00 - 19:45', instructor: 'Maya Anggraini', quota: 7 },
        { day: 'Sabtu', time: '09:00 - 09:45', instructor: 'Dian Permata', quota: 15 }
      ],
      instructor: {
        name: 'Dian Permata',
        photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
        bio: 'Licensed Zumba Instructor dengan 7 tahun pengalaman. Energik dan passionate dalam membuat setiap kelas menjadi party yang menyenangkan!',
        certifications: ['Licensed Zumba Instructor', 'Zumba Toning', 'Strong Nation']
      },
      testimonials: [
        { name: 'Lisa Amelia', review: 'Zumba dengan Kak Dian itu kayak party! Nggak terasa lagi olahraga, tapi kalorinya banyak yang kebakar. Love it!' },
        { name: 'Nina Rahayu', review: 'Musiknya keren, gerakannya seru, instructor-nya energik! Zumba jadi olahraga favorit saya sekarang.' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 70.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 480.000', description: 'Hemat Rp 80.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    },
    'pilates': {
      name: 'Pilates',
      tagline: 'Strengthen your core, transform your body',
      heroImage: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1200&h=600&fit=crop',
      description: 'Pilates adalah metode latihan yang fokus pada penguatan otot inti, perbaikan postur, dan peningkatan fleksibilitas. Dengan gerakan yang terkontrol dan fokus pada pernapasan, Pilates membantu membentuk tubuh yang kuat dan seimbang.',
      level: 'Menengah',
      duration: '50 menit',
      calories: '250-350 kalori',
      capacity: '15',
      benefits: [
        'Memperkuat otot inti dan punggung',
        'Memperbaiki postur tubuh',
        'Meningkatkan fleksibilitas dan keseimbangan',
        'Mengurangi nyeri punggung',
        'Membentuk otot tanpa menambah massa berlebih'
      ],
      equipment: ['Matras', 'Handuk', 'Botol minum', 'Resistance band (disediakan)'],
      schedules: [
        { day: 'Selasa', time: '18:00 - 18:50', instructor: 'Sari Wijayanti', quota: 5 },
        { day: 'Kamis', time: '07:00 - 07:50', instructor: 'Sari Wijayanti', quota: 8 },
        { day: 'Sabtu', time: '10:00 - 10:50', instructor: 'Nina Pradita', quota: 6 }
      ],
      instructor: {
        name: 'Sari Wijayanti',
        photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop',
        bio: 'Certified Pilates instructor dengan 5 tahun pengalaman. Spesialisasi dalam rehabilitasi dan core strengthening.',
        certifications: ['Certified Pilates Instructor', 'Mat Pilates Specialist', 'Reformer Pilates']
      },
      testimonials: [
        { name: 'Amanda Putri', review: 'Pilates benar-benar mengubah postur saya. Nyeri punggung yang sudah bertahun-tahun hilang setelah rutin kelas ini!' },
        { name: 'Eka Saraswati', review: 'Kak Sari sangat detail dalam mengoreksi gerakan. Hasilnya terasa banget di core dan postur tubuh.' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 85.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 600.000', description: 'Hemat Rp 80.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    },
    'bodycombat': {
      name: 'Body Combat',
      tagline: 'Fight your way to fitness',
      heroImage: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1200&h=600&fit=crop',
      description: 'Body Combat adalah program latihan kardio intensitas tinggi yang terinspirasi dari berbagai seni bela diri seperti karate, boxing, taekwondo, tai chi dan muay thai. Kombinasi gerakan yang powerful dengan musik yang energik untuk membakar kalori maksimal.',
      level: 'Menengah - Lanjut',
      duration: '55 menit',
      calories: '600-800 kalori',
      capacity: '20',
      benefits: [
        'Membakar kalori dalam jumlah besar',
        'Meningkatkan kekuatan dan daya tahan',
        'Melatih koordinasi dan refleks',
        'Meningkatkan kepercayaan diri',
        'Melepaskan stress dengan cara yang positif'
      ],
      equipment: ['Sepatu olahraga', 'Handuk', 'Botol minum', 'Hand wraps (opsional)'],
      schedules: [
        { day: 'Senin', time: '19:00 - 19:55', instructor: 'Reza Pratama', quota: 7 },
        { day: 'Rabu', time: '07:00 - 07:55', instructor: 'Agung Saputra', quota: 10 },
        { day: 'Jumat', time: '18:30 - 19:25', instructor: 'Reza Pratama', quota: 5 }
      ],
      instructor: {
        name: 'Reza Pratama',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
        bio: 'Certified Body Combat instructor dengan background martial arts. Berpengalaman 6 tahun dalam group fitness training.',
        certifications: ['Les Mills Body Combat', 'Boxing Fitness Instructor', 'Group Fitness Trainer']
      },
      testimonials: [
        { name: 'Budi Santoso', review: 'Kelas paling intense yang pernah saya ikuti! Setiap sesi selalu berkeringat dan merasa accomplished.' },
        { name: 'Andi Wijaya', review: 'Kak Reza sangat energik dan motivating. Body Combat jadi cara favorit saya untuk release stress!' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 80.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 560.000', description: 'Hemat Rp 80.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    },
    'senamhamil': {
      name: 'Senam Hamil',
      tagline: 'Sehat dan bugar untuk ibu dan bayi',
      heroImage: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=600&fit=crop',
      description: 'Senam Hamil dirancang khusus untuk ibu hamil dengan gerakan yang aman dan bermanfaat untuk persiapan persalinan. Membantu menjaga kebugaran, mengurangi keluhan kehamilan, dan mempersiapkan tubuh untuk proses melahirkan.',
      level: 'Khusus Ibu Hamil',
      duration: '30 menit',
      calories: '150-200 kalori',
      capacity: '10',
      benefits: [
        'Mengurangi nyeri punggung dan pinggul',
        'Mempersiapkan otot untuk persalinan',
        'Meningkatkan stamina dan kekuatan',
        'Mengurangi stress dan kecemasan',
        'Membantu tidur lebih nyenyak'
      ],
      equipment: ['Matras', 'Bantal kecil', 'Botol minum', 'Pakaian hamil yang nyaman'],
      schedules: [
        { day: 'Selasa', time: '09:00 - 09:30', instructor: 'Dr. Amelia Kusuma', quota: 4 },
        { day: 'Kamis', time: '09:00 - 09:30', instructor: 'Dr. Amelia Kusuma', quota: 5 },
        { day: 'Sabtu', time: '08:00 - 08:30', instructor: 'Bidan Siti Nurhaliza', quota: 3 }
      ],
      instructor: {
        name: 'Dr. Amelia Kusuma',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
        bio: 'Dokter spesialis kandungan dan instruktur senam hamil bersertifikat. Berpengalaman 10 tahun dalam prenatal care.',
        certifications: ['Sp.OG', 'Certified Prenatal Exercise Specialist', 'Lamaze Certified']
      },
      testimonials: [
        { name: 'Rina Melati', review: 'Senam hamil dengan dr. Amelia sangat membantu mengurangi sakit pinggang saya. Saya jadi lebih siap untuk persalinan!' },
        { name: 'Dewi Lestari', review: 'Gerakannya aman dan sesuai dengan kondisi kehamilan. Instrukturnya juga sangat perhatian dengan kondisi setiap peserta.' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 100.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 700.000', description: 'Hemat Rp 100.000' },
        { name: 'Paket 12 Sesi', price: 'Rp 1.000.000', description: 'Hemat Rp 200.000' }
      ]
    },
    'hiit': {
      name: 'HIIT Training',
      tagline: 'Maximum results in minimum time',
      heroImage: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=1200&h=600&fit=crop',
      description: 'High Intensity Interval Training (HIIT) adalah metode latihan dengan intensitas tinggi yang bergantian dengan periode istirahat singkat. Efektif membakar lemak, meningkatkan metabolisme, dan membangun kekuatan dalam waktu singkat.',
      level: 'Lanjut',
      duration: '30 menit',
      calories: '400-600 kalori',
      capacity: '15',
      benefits: [
        'Membakar lemak hingga 24 jam setelah latihan',
        'Meningkatkan metabolisme',
        'Membangun otot dan kekuatan',
        'Meningkatkan VO2 max',
        'Efisien waktu dengan hasil maksimal'
      ],
      equipment: ['Sepatu olahraga', 'Handuk', 'Botol minum', 'Matras'],
      schedules: [
        { day: 'Selasa', time: '06:00 - 06:30', instructor: 'Fikri Ramadhan', quota: 6 },
        { day: 'Kamis', time: '19:00 - 19:30', instructor: 'Fikri Ramadhan', quota: 4 },
        { day: 'Sabtu', time: '07:00 - 07:30', instructor: 'Dimas Pratama', quota: 8 }
      ],
      instructor: {
        name: 'Fikri Ramadhan',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
        bio: 'Certified Personal Trainer dengan spesialisasi HIIT dan functional training. Berpengalaman 7 tahun dalam high-intensity training.',
        certifications: ['NASM Certified Personal Trainer', 'HIIT Specialist', 'TRX Instructor']
      },
      testimonials: [
        { name: 'Yoga Aditya', review: 'HIIT dengan Coach Fikri sangat challenging tapi hasilnya luar biasa! Body fat saya turun drastis dalam 2 bulan.' },
        { name: 'Rizki Nugraha', review: '30 menit tapi rasanya seperti workout 1 jam! Efisien dan efektif banget buat yang sibuk.' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 90.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 640.000', description: 'Hemat Rp 80.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    },
    'meditation': {
      name: 'Relax & Meditation',
      tagline: 'Find your inner peace and balance',
      heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop',
      description: 'Kelas Relax & Meditation menggabungkan teknik meditasi, pernapasan dalam, dan relaksasi untuk mengurangi stress, meningkatkan fokus, dan mencapai ketenangan pikiran. Cocok untuk semua orang yang ingin menemukan keseimbangan di tengah kesibukan.',
      level: 'Pemula',
      duration: '45 menit',
      calories: '100-150 kalori',
      capacity: '20',
      benefits: [
        'Mengurangi stress dan kecemasan',
        'Meningkatkan fokus dan konsentrasi',
        'Memperbaiki kualitas tidur',
        'Meningkatkan kesadaran diri',
        'Menurunkan tekanan darah'
      ],
      equipment: ['Matras yoga', 'Bantal meditasi', 'Selimut tipis', 'Pakaian nyaman'],
      schedules: [
        { day: 'Senin', time: '20:00 - 20:45', instructor: 'Kartika Sari', quota: 12 },
        { day: 'Rabu', time: '06:30 - 07:15', instructor: 'Kartika Sari', quota: 8 },
        { day: 'Jumat', time: '19:00 - 19:45', instructor: 'Ananda Putri', quota: 15 }
      ],
      instructor: {
        name: 'Kartika Sari',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
        bio: 'Certified meditation and mindfulness teacher dengan 8 tahun pengalaman. Passionate dalam membantu orang menemukan ketenangan batin.',
        certifications: ['Certified Meditation Teacher', 'Mindfulness Instructor', 'Sound Healing Practitioner']
      },
      testimonials: [
        { name: 'Putri Rahmawati', review: 'Setelah rutin meditation class, saya jadi lebih tenang dan tidur lebih nyenyak. Stress kerja juga berkurang!' },
        { name: 'Indah Permata', review: 'Kak Kartika membimbing meditasi dengan sangat baik. Suasananya tenang dan sangat relax.' }
      ],
      pricing: [
        { name: 'Per Sesi', price: 'Rp 75.000', description: 'Untuk 1x pertemuan' },
        { name: 'Paket 8 Sesi', price: 'Rp 520.000', description: 'Hemat Rp 80.000' },
        { name: 'Member Bulanan', price: 'Rp 850.000', description: 'Unlimited kelas' }
      ]
    }
  };

  const classData = computed(() => {
    const className = route.params.className;
    return classesData[className] || classesData['aerobik'];
  });

  return {
    classData
  };
}