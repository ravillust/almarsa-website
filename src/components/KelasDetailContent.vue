<template>
  <div class="max-w-7xl mx-auto px-4 py-8 md:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      
      <!-- Left Content -->
      <div class="lg:col-span-2 space-y-8">
        <KelasAbout :classData="classData" />
        <KelasEquipment :equipment="classData.equipment" />
        <KelasSchedule :schedules="classData.schedules" />
        <KelasInstructor :instructor="classData.instructor" />
        <KelasTestimonials :testimonials="classData.testimonials" />
      </div>

      <!-- Right Sidebar -->
      <div class="lg:col-span-1">
        <KelasSidebar :classData="classData" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { useClassData } from '@/composables/useClassData';
import KelasAbout from '@/components/KelasAbout.vue';
import KelasEquipment from '@/components/KelasEquipment.vue';
import KelasSchedule from '@/components/KelasSchedule.vue';
import KelasInstructor from '@/components/KelasInstructor.vue';
import KelasTestimonials from '@/components/KelasTestimonials.vue';
import KelasSidebar from '@/components/KelasSidebar.vue';

const { classData } = useClassData();
</script>