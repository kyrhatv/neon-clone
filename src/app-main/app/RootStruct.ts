import { NavOption } from 'app-main/utils/RootStructInterface';

export const RootStruct: NavOption[] = [
    {
        key: 'features.planning.title',
        link: '/planning',
        iconName: 'calendar-alt',
        hasSubCategories: true,
        subCategories: [
            {
                categoryId: 'schedules',
                sortOrder: 0
            },
            {
                categoryId: 'scheduleProccess',
                sortOrder: 1
            }
        ],
        children: [
            {
                key: 'features.planning.dashboard',
                link: '/dashboard',
                subCategoryId: 'schedules'
            },
            {
                key: 'features.planning.schedules',
                link: '/schedules',
                subCategoryId: 'schedules'
            },
            {
                key: 'features.planning.lines',
                link: '/lines',
                subCategoryId: 'schedules'
            },
            {
                key: 'features.planning.replacements',
                link: '/replacements',
                subCategoryId: 'schedules'
            },
            {
                key: 'features.planning.replacementsByEmployee',
                link: '/replacementsByEmployee',
                subCategoryId: 'schedules'
            },
            {
                key: 'features.planning.quartRequirements',
                link: '/quartRequirements',
                subCategoryId: 'schedules'
            },
            {
                key: 'features.planning.masterSchedules',
                link: '/masterSchedules',
                subCategoryId: 'scheduleProccess'
            },
            {
                key: 'features.planning.orders',
                link: '/orders',
                subCategoryId: 'scheduleProccess'
            },
            {
                key: 'features.planning.positions',
                link: '/positions',
                subCategoryId: 'scheduleProccess'
            },
            {
                key: 'features.planning.projects',
                link: '/projects',
                subCategoryId: 'scheduleProccess'
            }
        ]
    },
    {
        key: 'features.timesheets.title',
        link: '/timesheets',
        iconName: 'clock',
        hasSubCategories: false,
        subCategories: null,
        children: [
            {
                key: 'features.timesheets.dashboard',
                link: '/dashboard',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.summary',
                link: '/summary',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.details',
                link: '/details',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.period',
                link: '/period',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.corrections',
                link: '/corrections',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.batchEntry',
                link: '/batchEntry',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.history',
                link: '/history',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'features.organisation.title',
        link: '/organisation',
        iconName: 'sitemap',
        hasSubCategories: false,
        subCategories: null,
        children: [
            {
                key: 'features.organisation.employees',
                link: '/employees',
                subCategoryId: null
            },
            {
                key: 'features.organisation.hierarchy',
                link: '/hierarchy',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'features.analyze.title',
        link: '/analyze',
        iconName: 'chart-line',
        hasSubCategories: false,
        subCategories: null,
        children: [
            {
                key: 'features.analyze.reports',
                link: '/reports',
                subCategoryId: null
            },
            {
                key: 'features.analyze.publication',
                link: '/report-configuration',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'features.request.title',
        link: '/request',
        iconName: 'reply-all',
        hasSubCategories: false,
        subCategories: null,
        children: [
            {
                key: 'features.request.list',
                link: '/list',
                subCategoryId: null
            },
            {
                key: 'features.request.declaration',
                link: '/declaration',
                subCategoryId: null
            },
            {
                key: 'features.request.simplifiedAbscence',
                link: '/simplifiedAbscence',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'parameters',
        link: '/parameters',
        iconName: 'cog',
        hasSubCategories: false,
        subCategories: null,
        children: []
    },
    {
        key: 'profile',
        link: '/profile',
        iconName: 'user-circle',
        hasSubCategories: false,
        subCategories: null,
        children: []
    }
];
