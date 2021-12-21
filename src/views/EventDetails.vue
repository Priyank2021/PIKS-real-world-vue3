<template>
    <div v-if="event">
        <h1> {{ event.title }} </h1>
        <p> {{ event.description }} </p>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
    props: ['id'],
    data() {
        return {
            event: null
        }
    },
    created() {
        //fetch single event by id
         EventService.getEvent(this.id)
    .then(response => {
      //console.log('events:', response.data)
      this.event = response.data
    })
    .catch(error => {
      console.log(error)
    })
    }
}
</script>