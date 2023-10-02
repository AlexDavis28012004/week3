const Home = { 
  template: '<div><h2>Home_Page</h2></div><p>Welcome my  website. Here, you can see  my assessment, projects, and talent. Click on the links above to view the content. I hope you have a great experience while browsing my site!</p>' 
};

const About = { 
  template: '<div><h2>About Me</h2></div><p>good in html, CSS, and JavaScript. i am good at football.</p>' 
};

const Contact = { 
  template: `<p>If you want to contact me, fill the form.</p>
    <div>
      <h2>Contact</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message"></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Submitted:', this.formData);
    },
  },
};

const Assessments = {
  template: `
    <div>
      <h2>Assessments</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specifications</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="assessment in assessments" :key="assessment.id">
            <td>{{ assessment.name }}</td>
            <td>{{ assessment.specification }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
      assessments: [
        {
          id: 1,
          name: 'develping web project',
          specification: 'creating web using HTML, CSS, and JavaScript',
        },
        {
          id: 2,
          name: 'Vue.js Application',
          specification: 'creating web using Vue.js directives',
        },
      ],
    };
  },
};

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/assessments', component: Assessments }, // Corrected the component name
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = Vue.createApp({});

app.use(router);

app.mount('#app');

