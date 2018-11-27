/*
 * Copyright © 2017, Rezo Zero
 *
 * @file StartingBlocks.js
 * @author Adrien Scholaert <adrien@rezo-zero.com>
 */
import Bottle from 'bottlejs'
import PageBuilder from './services/PageBuilder'
import BlockBuilder from './services/BlockBuilder'
import Dom from './services/Dom'
import TransitionFactory from './factories/TransitionFactory'
import AbstractPage from './abstracts/AbstractPage'

/**
 * @namespace
 * @type {Object} defaults                      - Default config
 * @property {String} defaults.wrapperId        - Id of the main wrapper
 * @property {String} defaults.pageBlockClass
 * @property {String} defaults.pageClass        - Class name used to identify the containers
 * @property {String} defaults.objectTypeAttr   - The data attribute name to find the node type
 * @property {String} defaults.noAjaxLinkClass
 * @property {String} defaults.noPrefetchClass  - Class name used to ignore prefetch on links.
 * @const
 * @default
 */
const CONFIG = {
    defaults: {
        wrapperId: 'sb-wrapper',
        pageBlockClass: 'page-block',
        pageClass: 'page-content',
        objectTypeAttr: 'data-node-type',
        noAjaxLinkClass: 'no-ajax-link',
        noPrefetchClass: 'no-prefetch'
    }
}

export default class StartingBlocks {
    constructor (config = {}) {
        this.bottle = new Bottle()
        this.bootables = []

        this.bottle.value('Config', {
            ...CONFIG.defaults,
            ...config
        })

        this.provider('Dom', Dom)
        this.provider('BlockBuilder', BlockBuilder)
        this.instanceFactory('AbstractPage', c => {
            return new AbstractPage(c)
        })
        this.bootableProvider('PageBuilder', PageBuilder)
    }

    provider (id, ClassName, ...args) {
        if (!id || !ClassName) {
            throw new Error('A parameter is missing')
        }

        this.bottle.provider(id, function () {
            this.$get = container => {
                return new ClassName(container, ...args)
            }
        })
    }

    factory (id, f) {
        this.bottle.factory(id, f)
    }

    instanceFactory (id, f) {
        this.bottle.instanceFactory(id, f)
    }

    bootableProvider (id, ClassName, ...args) {
        this.provider(id, ClassName, ...args)
        this.bootables.push(id)
    }

    boot () {
        for (const serviceName of this.bootables) {
            if (this.bottle.container.hasOwnProperty(serviceName)) {
                this.bottle.container[serviceName].boot()
            }
        }
    }
}
