<template>
  <q-page class="">
    <div class="row">
      <q-table
        hide-header
        class="col my-sticky-header-column-table"
        title="Posts"
        :rows="posts"
        :columns="columns"
        row-key="id"
        selection="single"
        v-model:selected="selected"
      >
        <!-- <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              flat round
              icon="create"
              color="purple"
              @click="editarPost(props.row)"
            />
            <q-btn
              flat round
              icon="delete"
              color="negative"
              @click="deletarPost(props.row)"
            />
          </q-td>
        </template> -->
        <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">{{ props.row.body }}.</div>
          </q-td>
        </q-tr>
      </template>
      </q-table>
      {{ selected }}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'id',
          label: 'ID do post',
          field: 'id',
          align: 'left',
          sortable: true
        },
        {
          name: 'name',
          label: 'Título',
          field: 'title',
          align: 'left',
          sortable: true
        },
        {
          name: 'action',
          label: 'Action',
          field: '',
          align: 'center',
          sortable: false
        }
      ],
      posts: [],
      selected: []
    }
  },

  mounted () {
    this.getPosts()
  },

  methods: {
    getPosts () {
      this.$axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log(response.data)
          this.posts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    editarPost (idPost) {
      console.log(idPost)
    },
    deletarPost (idPost) {
      console.log(idPost)
    }
  }
})
</script>
