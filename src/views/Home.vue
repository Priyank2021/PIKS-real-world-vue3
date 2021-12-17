<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'Sales & Services',
          title: 'Barcode Printers',
          description: 'ATPL can assist you with all of your barcode printing needs. We also provide the appropriate software applications, labels, ribbons, media and supplies along with instruction and even repair services.',
          //location: 'Meow Town',
          //date: 'January 28, 2022',
          //time: '12:00',
          //petsAllowed: true,
          //organizer: 'Kat Laydee'
        },
        {
          id: 4582797,
          category: 'Sales & Services',
          title: 'Barcode Scanners',
          description: 'ATPL provides a wide range of barcode scanners and images with wireless functionality. Use general purpose handheld or hands-free scanners in retail, healthcare or light manufacturing operations and rugged scanners on the manufacturing and warehouse floor..',
          //location: 'Flora City',
          //date: 'March 14, 2022',
          //time: '10:00',
          //petsAllowed: true,
          //organizer: 'Fern Pollin'
        },
        {
          id: 8419988,
          category: 'Sales & Services',
          title: 'Hand-held Mobile Devices',
          description: 'ATPL offers a wide range of handheld mobile computers with voice and data collection functionality, including barcode scanning and image capture as well as wireless networking capabilities.',
          //location: 'Playa Del Carmen',
          //date: 'July 22, 2022',
          //time: '11:00',
          //petsAllowed: false,
          //organizer: 'Carey Wales'
        }
      ]
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
