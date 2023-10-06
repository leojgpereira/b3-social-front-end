import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/autenticacao/LoginView'
import CadastroOrganizacaoView from '@/views/prospeccao/CadastroOrganizacaoView'

import NotFoundView from '@/views/NotFoundView'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/organizacoes/cadastrar',
        name: 'CadastroOrganizacao',
        component: CadastroOrganizacaoView
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
