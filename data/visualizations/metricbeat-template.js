'use strict';
const mappings = [
  {
    _type: 'template',
    _name: 'metricbeat',
    _json: {
      mappings: {
        _default_: {
          _all: {
            norms: false,
          },
          _meta: {
            version: '5.3.0',
          },
          date_detection: false,
          dynamic_templates: [
            {
              strings_as_keyword: {
                mapping: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                match_mapping_type: 'string',
              },
            },
            {
              'system-process-cgroup-cpuacct-percpu': {
                mapping: {
                  type: 'long',
                },
                match_mapping_type: 'long',
                path_match: 'system.process.cgroup.cpuacct.percpu.*',
              },
            },
          ],
          properties: {
            '@timestamp': {
              type: 'date',
            },
            apache: {
              properties: {
                status: {
                  properties: {
                    bytes_per_request: {
                      scaling_factor: 1000,
                      type: 'scaled_float',
                    },
                    bytes_per_sec: {
                      scaling_factor: 1000,
                      type: 'scaled_float',
                    },
                    connections: {
                      properties: {
                        async: {
                          properties: {
                            closing: {
                              type: 'long',
                            },
                            keep_alive: {
                              type: 'long',
                            },
                            writing: {
                              type: 'long',
                            },
                          },
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    cpu: {
                      properties: {
                        children_system: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        children_user: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        load: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        system: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        user: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                    hostname: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    load: {
                      properties: {
                        1: {
                          scaling_factor: 100,
                          type: 'scaled_float',
                        },
                        15: {
                          scaling_factor: 100,
                          type: 'scaled_float',
                        },
                        5: {
                          scaling_factor: 100,
                          type: 'scaled_float',
                        },
                      },
                    },
                    requests_per_sec: {
                      scaling_factor: 1000,
                      type: 'scaled_float',
                    },
                    scoreboard: {
                      properties: {
                        closing_connection: {
                          type: 'long',
                        },
                        dns_lookup: {
                          type: 'long',
                        },
                        gracefully_finishing: {
                          type: 'long',
                        },
                        idle_cleanup: {
                          type: 'long',
                        },
                        keepalive: {
                          type: 'long',
                        },
                        logging: {
                          type: 'long',
                        },
                        open_slot: {
                          type: 'long',
                        },
                        reading_request: {
                          type: 'long',
                        },
                        sending_reply: {
                          type: 'long',
                        },
                        starting_up: {
                          type: 'long',
                        },
                        total: {
                          type: 'long',
                        },
                        waiting_for_connection: {
                          type: 'long',
                        },
                      },
                    },
                    total_accesses: {
                      type: 'long',
                    },
                    total_kbytes: {
                      type: 'long',
                    },
                    uptime: {
                      properties: {
                        server_uptime: {
                          type: 'long',
                        },
                        uptime: {
                          type: 'long',
                        },
                      },
                    },
                    workers: {
                      properties: {
                        busy: {
                          type: 'long',
                        },
                        idle: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
              },
            },
            beat: {
              properties: {
                hostname: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                name: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                version: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
              },
            },
            ceph: {
              properties: {
                cluster_disk: {
                  properties: {
                    available: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    total: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    used: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                cluster_health: {
                  properties: {
                    overall_status: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    timechecks: {
                      properties: {
                        epoch: {
                          type: 'long',
                        },
                        round: {
                          properties: {
                            status: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                  },
                },
                monitor_health: {
                  properties: {
                    available: {
                      properties: {
                        kb: {
                          type: 'long',
                        },
                        pct: {
                          type: 'long',
                        },
                      },
                    },
                    health: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    last_updated: {
                      type: 'date',
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    store_stats: {
                      properties: {
                        last_updated: {
                          type: 'long',
                        },
                        log: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        misc: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        sst: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        total: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    total: {
                      properties: {
                        kb: {
                          type: 'long',
                        },
                      },
                    },
                    used: {
                      properties: {
                        kb: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                pool_disk: {
                  properties: {
                    id: {
                      type: 'long',
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    stats: {
                      properties: {
                        available: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        objects: {
                          type: 'long',
                        },
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                            kb: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            couchbase: {
              properties: {
                bucket: {
                  properties: {
                    data: {
                      properties: {
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    disk: {
                      properties: {
                        fetches: {
                          type: 'long',
                        },
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    item_count: {
                      type: 'long',
                    },
                    memory: {
                      properties: {
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    ops_per_sec: {
                      type: 'long',
                    },
                    quota: {
                      properties: {
                        ram: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        use: {
                          properties: {
                            pct: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                          },
                        },
                      },
                    },
                    type: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                  },
                },
                cluster: {
                  properties: {
                    hdd: {
                      properties: {
                        free: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        quota: {
                          properties: {
                            total: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        total: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        used: {
                          properties: {
                            by_data: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            value: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    max_bucket_count: {
                      type: 'long',
                    },
                    quota: {
                      properties: {
                        index_memory: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                        memory: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    ram: {
                      properties: {
                        quota: {
                          properties: {
                            total: {
                              properties: {
                                per_node: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                value: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                            used: {
                              properties: {
                                per_node: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                value: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        total: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        used: {
                          properties: {
                            by_data: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            value: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                node: {
                  properties: {
                    cmd_get: {
                      type: 'long',
                    },
                    couch: {
                      properties: {
                        docs: {
                          properties: {
                            data_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            disk_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        spatial: {
                          properties: {
                            data_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            disk_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        views: {
                          properties: {
                            data_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            disk_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    cpu_utilization_rate: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                    current_items: {
                      properties: {
                        total: {
                          type: 'long',
                        },
                        value: {
                          type: 'long',
                        },
                      },
                    },
                    ep_bg_fetched: {
                      type: 'long',
                    },
                    get_hits: {
                      type: 'long',
                    },
                    hostname: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    mcd_memory: {
                      properties: {
                        allocated: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        reserved: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    memory: {
                      properties: {
                        free: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        total: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    ops: {
                      type: 'long',
                    },
                    swap: {
                      properties: {
                        total: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    uptime: {
                      properties: {
                        sec: {
                          type: 'long',
                        },
                      },
                    },
                    vb_replica_curr_items: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            docker: {
              properties: {
                container: {
                  properties: {
                    command: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    created: {
                      type: 'date',
                    },
                    id: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    image: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    labels: {
                      properties: {},
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    size: {
                      properties: {
                        root_fs: {
                          type: 'long',
                        },
                        rw: {
                          type: 'long',
                        },
                      },
                    },
                    status: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    tags: {
                      properties: {},
                    },
                  },
                },
                cpu: {
                  properties: {
                    kernel: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    system: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    total: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                    user: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                diskio: {
                  properties: {
                    reads: {
                      scaling_factor: 1000,
                      type: 'scaled_float',
                    },
                    total: {
                      scaling_factor: 1000,
                      type: 'scaled_float',
                    },
                    writes: {
                      scaling_factor: 1000,
                      type: 'scaled_float',
                    },
                  },
                },
                healthcheck: {
                  properties: {
                    event: {
                      properties: {
                        end_date: {
                          type: 'date',
                        },
                        exit_code: {
                          type: 'long',
                        },
                        output: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        start_date: {
                          type: 'date',
                        },
                      },
                    },
                    failingstreak: {
                      type: 'long',
                    },
                    status: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                  },
                },
                image: {
                  properties: {
                    created: {
                      type: 'date',
                    },
                    id: {
                      properties: {
                        current: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        parent: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    labels: {
                      properties: {},
                    },
                    size: {
                      properties: {
                        regular: {
                          type: 'long',
                        },
                        virtual: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                info: {
                  properties: {
                    containers: {
                      properties: {
                        paused: {
                          type: 'long',
                        },
                        running: {
                          type: 'long',
                        },
                        stopped: {
                          type: 'long',
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    id: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    images: {
                      type: 'long',
                    },
                  },
                },
                memory: {
                  properties: {
                    fail: {
                      properties: {
                        count: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                    limit: {
                      type: 'long',
                    },
                    rss: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    usage: {
                      properties: {
                        max: {
                          type: 'long',
                        },
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                network: {
                  properties: {
                    in: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        dropped: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        errors: {
                          type: 'long',
                        },
                        packets: {
                          type: 'long',
                        },
                      },
                    },
                    interface: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    out: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        dropped: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        errors: {
                          type: 'long',
                        },
                        packets: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
              },
            },
            fields: {
              properties: {},
            },
            haproxy: {
              properties: {
                info: {
                  properties: {
                    compress: {
                      properties: {
                        bps: {
                          properties: {
                            in: {
                              type: 'long',
                            },
                            out: {
                              type: 'long',
                            },
                            rate_limit: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    connection: {
                      properties: {
                        current: {
                          type: 'long',
                        },
                        hard_max: {
                          type: 'long',
                        },
                        max: {
                          type: 'long',
                        },
                        rate: {
                          properties: {
                            limit: {
                              type: 'long',
                            },
                            max: {
                              type: 'long',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                        ssl: {
                          properties: {
                            current: {
                              type: 'long',
                            },
                            max: {
                              type: 'long',
                            },
                            total: {
                              type: 'long',
                            },
                          },
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    idle: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                    memory: {
                      properties: {
                        max: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    pid: {
                      type: 'long',
                    },
                    pipes: {
                      properties: {
                        free: {
                          type: 'long',
                        },
                        max: {
                          type: 'long',
                        },
                        used: {
                          type: 'long',
                        },
                      },
                    },
                    process_num: {
                      type: 'long',
                    },
                    processes: {
                      type: 'long',
                    },
                    requests: {
                      properties: {
                        max: {
                          type: 'long',
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    run_queue: {
                      type: 'long',
                    },
                    session: {
                      properties: {
                        rate: {
                          properties: {
                            limit: {
                              type: 'long',
                            },
                            max: {
                              type: 'long',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    sockets: {
                      properties: {
                        max: {
                          type: 'long',
                        },
                      },
                    },
                    ssl: {
                      properties: {
                        backend: {
                          properties: {
                            key_rate: {
                              properties: {
                                max: {
                                  type: 'long',
                                },
                                value: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        cache_misses: {
                          type: 'long',
                        },
                        cached_lookups: {
                          type: 'long',
                        },
                        frontend: {
                          properties: {
                            key_rate: {
                              properties: {
                                max: {
                                  type: 'long',
                                },
                                value: {
                                  type: 'long',
                                },
                              },
                            },
                            session_reuse: {
                              properties: {
                                pct: {
                                  scaling_factor: 1000,
                                  type: 'scaled_float',
                                },
                              },
                            },
                          },
                        },
                        rate: {
                          properties: {
                            limit: {
                              type: 'long',
                            },
                            max: {
                              type: 'long',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    tasks: {
                      type: 'long',
                    },
                    ulimit_n: {
                      type: 'long',
                    },
                    uptime: {
                      properties: {
                        sec: {
                          type: 'long',
                        },
                      },
                    },
                    zlib_mem_usage: {
                      properties: {
                        max: {
                          type: 'long',
                        },
                        value: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                stat: {
                  properties: {
                    check: {
                      properties: {
                        agent: {
                          properties: {
                            last: {
                              type: 'long',
                            },
                          },
                        },
                        code: {
                          type: 'long',
                        },
                        down: {
                          type: 'long',
                        },
                        duration: {
                          type: 'long',
                        },
                        failed: {
                          type: 'long',
                        },
                        health: {
                          properties: {
                            fail: {
                              type: 'long',
                            },
                            last: {
                              type: 'long',
                            },
                          },
                        },
                        status: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    client: {
                      properties: {
                        aborted: {
                          type: 'long',
                        },
                      },
                    },
                    component_type: {
                      type: 'long',
                    },
                    compressor: {
                      properties: {
                        bypassed: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        in: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        out: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        response: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    connection: {
                      properties: {
                        retried: {
                          type: 'long',
                        },
                        time: {
                          properties: {
                            avg: {
                              type: 'long',
                            },
                          },
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    downtime: {
                      type: 'long',
                    },
                    in: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    last_change: {
                      type: 'long',
                    },
                    out: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    process_id: {
                      type: 'long',
                    },
                    proxy: {
                      properties: {
                        id: {
                          type: 'long',
                        },
                        name: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    queue: {
                      properties: {
                        limit: {
                          type: 'long',
                        },
                        time: {
                          properties: {
                            avg: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    request: {
                      properties: {
                        connection: {
                          properties: {
                            errors: {
                              type: 'long',
                            },
                          },
                        },
                        denied: {
                          type: 'long',
                        },
                        errors: {
                          type: 'long',
                        },
                        queued: {
                          properties: {
                            current: {
                              type: 'long',
                            },
                            max: {
                              type: 'long',
                            },
                          },
                        },
                        rate: {
                          properties: {
                            max: {
                              type: 'long',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                        redispatched: {
                          type: 'long',
                        },
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    response: {
                      properties: {
                        denied: {
                          type: 'long',
                        },
                        errors: {
                          type: 'long',
                        },
                        http: {
                          properties: {
                            '1xx': {
                              type: 'long',
                            },
                            '2xx': {
                              type: 'long',
                            },
                            '3xx': {
                              type: 'long',
                            },
                            '4xx': {
                              type: 'long',
                            },
                            '5xx': {
                              type: 'long',
                            },
                            other: {
                              type: 'long',
                            },
                          },
                        },
                        time: {
                          properties: {
                            avg: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    selected: {
                      properties: {
                        total: {
                          type: 'long',
                        },
                      },
                    },
                    server: {
                      properties: {
                        aborted: {
                          type: 'long',
                        },
                        active: {
                          type: 'long',
                        },
                        backup: {
                          type: 'long',
                        },
                        id: {
                          type: 'long',
                        },
                      },
                    },
                    service_name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    session: {
                      properties: {
                        current: {
                          type: 'long',
                        },
                        limit: {
                          type: 'long',
                        },
                        max: {
                          type: 'long',
                        },
                        rate: {
                          properties: {
                            limit: {
                              type: 'long',
                            },
                            max: {
                              type: 'long',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    status: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    throttle: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                    tracked: {
                      properties: {
                        id: {
                          type: 'long',
                        },
                      },
                    },
                    weight: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            kafka: {
              properties: {
                consumergroup: {
                  properties: {
                    broker: {
                      properties: {
                        address: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        id: {
                          type: 'long',
                        },
                      },
                    },
                    client: {
                      properties: {
                        host: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        id: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        member_id: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    error: {
                      properties: {
                        code: {
                          type: 'long',
                        },
                      },
                    },
                    id: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    meta: {
                      norms: false,
                      type: 'text',
                    },
                    offset: {
                      type: 'long',
                    },
                    partition: {
                      type: 'long',
                    },
                    topic: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                  },
                },
                partition: {
                  properties: {
                    broker: {
                      properties: {
                        address: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        id: {
                          type: 'long',
                        },
                      },
                    },
                    offset: {
                      properties: {
                        newest: {
                          type: 'long',
                        },
                        oldest: {
                          type: 'long',
                        },
                      },
                    },
                    partition: {
                      properties: {
                        error: {
                          properties: {
                            code: {
                              type: 'long',
                            },
                          },
                        },
                        id: {
                          type: 'long',
                        },
                        insync_replica: {
                          type: 'boolean',
                        },
                        isr: {
                          properties: {},
                        },
                        leader: {
                          type: 'long',
                        },
                        replica: {
                          type: 'long',
                        },
                      },
                    },
                    topic: {
                      properties: {
                        error: {
                          properties: {
                            code: {
                              type: 'long',
                            },
                          },
                        },
                        name: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                  },
                },
              },
            },
            meta: {
              properties: {
                cloud: {
                  properties: {
                    availability_zone: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    instance_id: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    machine_type: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    project_id: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    provider: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    region: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            metricset: {
              properties: {
                host: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                module: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                name: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                namespace: {
                  ignore_above: 1024,
                  type: 'keyword',
                },
                rtt: {
                  type: 'long',
                },
              },
            },
            mongodb: {
              properties: {
                dbstats: {
                  properties: {
                    avg_obj_size: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    collections: {
                      type: 'long',
                    },
                    data_file_version: {
                      properties: {
                        major: {
                          type: 'long',
                        },
                        minor: {
                          type: 'long',
                        },
                      },
                    },
                    data_size: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    db: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    extent_free_list: {
                      properties: {
                        num: {
                          type: 'long',
                        },
                        size: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    file_size: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    index_size: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                    indexes: {
                      type: 'long',
                    },
                    ns_size_mb: {
                      properties: {
                        mb: {
                          type: 'long',
                        },
                      },
                    },
                    num_extents: {
                      type: 'long',
                    },
                    objects: {
                      type: 'long',
                    },
                    storage_size: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                status: {
                  properties: {
                    asserts: {
                      properties: {
                        msg: {
                          type: 'long',
                        },
                        regular: {
                          type: 'long',
                        },
                        rollovers: {
                          type: 'long',
                        },
                        user: {
                          type: 'long',
                        },
                        warning: {
                          type: 'long',
                        },
                      },
                    },
                    background_flushing: {
                      properties: {
                        average: {
                          properties: {
                            ms: {
                              type: 'long',
                            },
                          },
                        },
                        flushes: {
                          type: 'long',
                        },
                        last: {
                          properties: {
                            ms: {
                              type: 'long',
                            },
                          },
                        },
                        last_finished: {
                          type: 'date',
                        },
                        total: {
                          properties: {
                            ms: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    connections: {
                      properties: {
                        available: {
                          type: 'long',
                        },
                        current: {
                          type: 'long',
                        },
                        total_created: {
                          type: 'long',
                        },
                      },
                    },
                    extra_info: {
                      properties: {
                        heap_usage: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        page_faults: {
                          type: 'long',
                        },
                      },
                    },
                    journaling: {
                      properties: {
                        commits: {
                          type: 'long',
                        },
                        commits_in_write_lock: {
                          type: 'long',
                        },
                        compression: {
                          type: 'long',
                        },
                        early_commits: {
                          type: 'long',
                        },
                        journaled: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                        times: {
                          properties: {
                            commits: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            commits_in_write_lock: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            dt: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            prep_log_buffer: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            remap_private_view: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            write_to_data_files: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            write_to_journal: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        write_to_data_files: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    local_time: {
                      type: 'date',
                    },
                    memory: {
                      properties: {
                        bits: {
                          type: 'long',
                        },
                        mapped: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                        mapped_with_journal: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                        resident: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                        virtual: {
                          properties: {
                            mb: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    network: {
                      properties: {
                        in: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        out: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                          },
                        },
                        requests: {
                          type: 'long',
                        },
                      },
                    },
                    opcounters: {
                      properties: {
                        command: {
                          type: 'long',
                        },
                        delete: {
                          type: 'long',
                        },
                        getmore: {
                          type: 'long',
                        },
                        insert: {
                          type: 'long',
                        },
                        query: {
                          type: 'long',
                        },
                        update: {
                          type: 'long',
                        },
                      },
                    },
                    opcounters_replicated: {
                      properties: {
                        command: {
                          type: 'long',
                        },
                        delete: {
                          type: 'long',
                        },
                        getmore: {
                          type: 'long',
                        },
                        insert: {
                          type: 'long',
                        },
                        query: {
                          type: 'long',
                        },
                        update: {
                          type: 'long',
                        },
                      },
                    },
                    storage_engine: {
                      properties: {
                        name: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    uptime: {
                      properties: {
                        ms: {
                          type: 'long',
                        },
                      },
                    },
                    version: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    wired_tiger: {
                      properties: {
                        cache: {
                          properties: {
                            dirty: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            maximum: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            pages: {
                              properties: {
                                evicted: {
                                  type: 'long',
                                },
                                read: {
                                  type: 'long',
                                },
                                write: {
                                  type: 'long',
                                },
                              },
                            },
                            used: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        concurrent_transactions: {
                          properties: {
                            read: {
                              properties: {
                                available: {
                                  type: 'long',
                                },
                                out: {
                                  type: 'long',
                                },
                                total_tickets: {
                                  type: 'long',
                                },
                              },
                            },
                            write: {
                              properties: {
                                available: {
                                  type: 'long',
                                },
                                out: {
                                  type: 'long',
                                },
                                total_tickets: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        log: {
                          properties: {
                            flushes: {
                              type: 'long',
                            },
                            max_file_size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            scans: {
                              type: 'long',
                            },
                            size: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            syncs: {
                              type: 'long',
                            },
                            write: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            writes: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    write_backs_queued: {
                      type: 'boolean',
                    },
                  },
                },
              },
            },
            mysql: {
              properties: {
                status: {
                  properties: {
                    aborted: {
                      properties: {
                        clients: {
                          type: 'long',
                        },
                        connects: {
                          type: 'long',
                        },
                      },
                    },
                    binlog: {
                      properties: {
                        cache: {
                          properties: {
                            disk_use: {
                              type: 'long',
                            },
                            use: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    bytes: {
                      properties: {
                        received: {
                          type: 'long',
                        },
                        sent: {
                          type: 'long',
                        },
                      },
                    },
                    command: {
                      properties: {
                        delete: {
                          type: 'long',
                        },
                        insert: {
                          type: 'long',
                        },
                        select: {
                          type: 'long',
                        },
                        update: {
                          type: 'long',
                        },
                      },
                    },
                    connections: {
                      type: 'long',
                    },
                    created: {
                      properties: {
                        tmp: {
                          properties: {
                            disk_tables: {
                              type: 'long',
                            },
                            files: {
                              type: 'long',
                            },
                            tables: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    delayed: {
                      properties: {
                        errors: {
                          type: 'long',
                        },
                        insert_threads: {
                          type: 'long',
                        },
                        writes: {
                          type: 'long',
                        },
                      },
                    },
                    flush_commands: {
                      type: 'long',
                    },
                    max_used_connections: {
                      type: 'long',
                    },
                    open: {
                      properties: {
                        files: {
                          type: 'long',
                        },
                        streams: {
                          type: 'long',
                        },
                        tables: {
                          type: 'long',
                        },
                      },
                    },
                    opened_tables: {
                      type: 'long',
                    },
                    threads: {
                      properties: {
                        cached: {
                          type: 'long',
                        },
                        connected: {
                          type: 'long',
                        },
                        created: {
                          type: 'long',
                        },
                        running: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
              },
            },
            nginx: {
              properties: {
                stubstatus: {
                  properties: {
                    accepts: {
                      type: 'long',
                    },
                    active: {
                      type: 'long',
                    },
                    current: {
                      type: 'long',
                    },
                    dropped: {
                      type: 'long',
                    },
                    handled: {
                      type: 'long',
                    },
                    hostname: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    reading: {
                      type: 'long',
                    },
                    requests: {
                      type: 'long',
                    },
                    waiting: {
                      type: 'long',
                    },
                    writing: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            php_fpm: {
              properties: {
                pool: {
                  properties: {
                    connections: {
                      properties: {
                        accepted: {
                          type: 'long',
                        },
                        queued: {
                          type: 'long',
                        },
                      },
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    processes: {
                      properties: {
                        active: {
                          type: 'long',
                        },
                        idle: {
                          type: 'long',
                        },
                      },
                    },
                    slow_requests: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            postgresql: {
              properties: {
                activity: {
                  properties: {
                    application_name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    backend_start: {
                      type: 'date',
                    },
                    client: {
                      properties: {
                        address: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        hostname: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        port: {
                          type: 'long',
                        },
                      },
                    },
                    database: {
                      properties: {
                        name: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        oid: {
                          type: 'long',
                        },
                      },
                    },
                    pid: {
                      type: 'long',
                    },
                    query: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    query_start: {
                      type: 'date',
                    },
                    state: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    state_change: {
                      type: 'date',
                    },
                    transaction_start: {
                      type: 'date',
                    },
                    user: {
                      properties: {
                        id: {
                          type: 'long',
                        },
                        name: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    waiting: {
                      type: 'boolean',
                    },
                  },
                },
                bgwriter: {
                  properties: {
                    buffers: {
                      properties: {
                        allocated: {
                          type: 'long',
                        },
                        backend: {
                          type: 'long',
                        },
                        backend_fsync: {
                          type: 'long',
                        },
                        checkpoints: {
                          type: 'long',
                        },
                        clean: {
                          type: 'long',
                        },
                        clean_full: {
                          type: 'long',
                        },
                      },
                    },
                    checkpoints: {
                      properties: {
                        requested: {
                          type: 'long',
                        },
                        scheduled: {
                          type: 'long',
                        },
                        times: {
                          properties: {
                            sync: {
                              properties: {
                                ms: {
                                  type: 'float',
                                },
                              },
                            },
                            write: {
                              properties: {
                                ms: {
                                  type: 'float',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    stats_reset: {
                      type: 'date',
                    },
                  },
                },
                database: {
                  properties: {
                    blocks: {
                      properties: {
                        hit: {
                          type: 'long',
                        },
                        read: {
                          type: 'long',
                        },
                        time: {
                          properties: {
                            read: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                            write: {
                              properties: {
                                ms: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    conflicts: {
                      type: 'long',
                    },
                    deadlocks: {
                      type: 'long',
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    number_of_backends: {
                      type: 'long',
                    },
                    oid: {
                      type: 'long',
                    },
                    rows: {
                      properties: {
                        deleted: {
                          type: 'long',
                        },
                        fetched: {
                          type: 'long',
                        },
                        inserted: {
                          type: 'long',
                        },
                        returned: {
                          type: 'long',
                        },
                        updated: {
                          type: 'long',
                        },
                      },
                    },
                    stats_reset: {
                      type: 'date',
                    },
                    temporary: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        files: {
                          type: 'long',
                        },
                      },
                    },
                    transactions: {
                      properties: {
                        commit: {
                          type: 'long',
                        },
                        rollback: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
              },
            },
            prometheus: {
              properties: {
                stats: {
                  properties: {
                    notifications: {
                      properties: {
                        dropped: {
                          type: 'long',
                        },
                        queue_length: {
                          type: 'long',
                        },
                      },
                    },
                    processes: {
                      properties: {
                        open_fds: {
                          type: 'long',
                        },
                      },
                    },
                    storage: {
                      properties: {
                        chunks_to_persist: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
              },
            },
            redis: {
              properties: {
                info: {
                  properties: {
                    clients: {
                      properties: {
                        biggest_input_buf: {
                          type: 'long',
                        },
                        blocked: {
                          type: 'long',
                        },
                        connected: {
                          type: 'long',
                        },
                        longest_output_list: {
                          type: 'long',
                        },
                      },
                    },
                    cluster: {
                      properties: {
                        enabled: {
                          type: 'boolean',
                        },
                      },
                    },
                    cpu: {
                      properties: {
                        used: {
                          properties: {
                            sys: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                            sys_children: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                            user: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                            user_children: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                          },
                        },
                      },
                    },
                    memory: {
                      properties: {
                        allocator: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        used: {
                          properties: {
                            lua: {
                              type: 'long',
                            },
                            peak: {
                              type: 'long',
                            },
                            rss: {
                              type: 'long',
                            },
                            value: {
                              type: 'long',
                            },
                          },
                        },
                      },
                    },
                    persistence: {
                      properties: {
                        aof: {
                          properties: {
                            bgrewrite: {
                              properties: {
                                last_status: {
                                  ignore_above: 1024,
                                  type: 'keyword',
                                },
                              },
                            },
                            enabled: {
                              type: 'boolean',
                            },
                            rewrite: {
                              properties: {
                                current_time: {
                                  properties: {
                                    sec: {
                                      type: 'long',
                                    },
                                  },
                                },
                                in_progress: {
                                  type: 'boolean',
                                },
                                last_time: {
                                  properties: {
                                    sec: {
                                      type: 'long',
                                    },
                                  },
                                },
                                scheduled: {
                                  type: 'boolean',
                                },
                              },
                            },
                            write: {
                              properties: {
                                last_status: {
                                  ignore_above: 1024,
                                  type: 'keyword',
                                },
                              },
                            },
                          },
                        },
                        loading: {
                          type: 'boolean',
                        },
                        rdb: {
                          properties: {
                            bgsave: {
                              properties: {
                                current_time: {
                                  properties: {
                                    sec: {
                                      type: 'long',
                                    },
                                  },
                                },
                                in_progress: {
                                  type: 'boolean',
                                },
                                last_status: {
                                  ignore_above: 1024,
                                  type: 'keyword',
                                },
                                last_time: {
                                  properties: {
                                    sec: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                            last_save: {
                              properties: {
                                changes_since: {
                                  type: 'long',
                                },
                                time: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    replication: {
                      properties: {
                        backlog: {
                          properties: {
                            active: {
                              type: 'long',
                            },
                            first_byte_offset: {
                              type: 'long',
                            },
                            histlen: {
                              type: 'long',
                            },
                            size: {
                              type: 'long',
                            },
                          },
                        },
                        connected_slaves: {
                          type: 'long',
                        },
                        master_offset: {
                          type: 'long',
                        },
                        role: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    server: {
                      properties: {
                        arch_bits: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        build_id: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        config_file: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        gcc_version: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        git_dirty: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        git_sha1: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        hz: {
                          type: 'long',
                        },
                        lru_clock: {
                          type: 'long',
                        },
                        mode: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        multiplexing_api: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        os: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        process_id: {
                          type: 'long',
                        },
                        run_id: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        tcp_port: {
                          type: 'long',
                        },
                        uptime: {
                          type: 'long',
                        },
                        version: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    stats: {
                      properties: {
                        commands_processed: {
                          type: 'long',
                        },
                        connections: {
                          properties: {
                            received: {
                              type: 'long',
                            },
                            rejected: {
                              type: 'long',
                            },
                          },
                        },
                        instantaneous: {
                          properties: {
                            input_kbps: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                            ops_per_sec: {
                              type: 'long',
                            },
                            output_kbps: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                          },
                        },
                        keys: {
                          properties: {
                            evicted: {
                              type: 'long',
                            },
                            expired: {
                              type: 'long',
                            },
                          },
                        },
                        keyspace: {
                          properties: {
                            hits: {
                              type: 'long',
                            },
                            misses: {
                              type: 'long',
                            },
                          },
                        },
                        latest_fork_usec: {
                          type: 'long',
                        },
                        migrate_cached_sockets: {
                          type: 'long',
                        },
                        net: {
                          properties: {
                            input: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                            output: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        pubsub: {
                          properties: {
                            channels: {
                              type: 'long',
                            },
                            patterns: {
                              type: 'long',
                            },
                          },
                        },
                        sync: {
                          properties: {
                            full: {
                              type: 'long',
                            },
                            partial: {
                              properties: {
                                err: {
                                  type: 'long',
                                },
                                ok: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                keyspace: {
                  properties: {
                    avg_ttl: {
                      type: 'long',
                    },
                    expires: {
                      type: 'long',
                    },
                    id: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    keys: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            system: {
              properties: {
                core: {
                  properties: {
                    id: {
                      type: 'long',
                    },
                    idle: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    iowait: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    irq: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    nice: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    softirq: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    steal: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    system: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    user: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                cpu: {
                  properties: {
                    cores: {
                      type: 'long',
                    },
                    idle: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    iowait: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    irq: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    nice: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    softirq: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    steal: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    system: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                    user: {
                      properties: {
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                        ticks: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                diskio: {
                  properties: {
                    io: {
                      properties: {
                        time: {
                          type: 'long',
                        },
                      },
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    read: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        count: {
                          type: 'long',
                        },
                        time: {
                          type: 'long',
                        },
                      },
                    },
                    serial_number: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    write: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        count: {
                          type: 'long',
                        },
                        time: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                filesystem: {
                  properties: {
                    available: {
                      type: 'long',
                    },
                    device_name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    files: {
                      type: 'long',
                    },
                    free: {
                      type: 'long',
                    },
                    free_files: {
                      type: 'long',
                    },
                    mount_point: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    total: {
                      type: 'long',
                    },
                    used: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                  },
                },
                fsstat: {
                  properties: {
                    count: {
                      type: 'long',
                    },
                    total_files: {
                      type: 'long',
                    },
                    total_size: {
                      properties: {
                        free: {
                          type: 'long',
                        },
                        total: {
                          type: 'long',
                        },
                        used: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                load: {
                  properties: {
                    1: {
                      scaling_factor: 100,
                      type: 'scaled_float',
                    },
                    15: {
                      scaling_factor: 100,
                      type: 'scaled_float',
                    },
                    5: {
                      scaling_factor: 100,
                      type: 'scaled_float',
                    },
                    norm: {
                      properties: {
                        1: {
                          scaling_factor: 100,
                          type: 'scaled_float',
                        },
                        15: {
                          scaling_factor: 100,
                          type: 'scaled_float',
                        },
                        5: {
                          scaling_factor: 100,
                          type: 'scaled_float',
                        },
                      },
                    },
                  },
                },
                memory: {
                  properties: {
                    actual: {
                      properties: {
                        free: {
                          type: 'long',
                        },
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                            pct: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                          },
                        },
                      },
                    },
                    free: {
                      type: 'long',
                    },
                    swap: {
                      properties: {
                        free: {
                          type: 'long',
                        },
                        total: {
                          type: 'long',
                        },
                        used: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                            pct: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                          },
                        },
                      },
                    },
                    total: {
                      type: 'long',
                    },
                    used: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        pct: {
                          scaling_factor: 1000,
                          type: 'scaled_float',
                        },
                      },
                    },
                  },
                },
                network: {
                  properties: {
                    in: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        dropped: {
                          type: 'long',
                        },
                        errors: {
                          type: 'long',
                        },
                        packets: {
                          type: 'long',
                        },
                      },
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    out: {
                      properties: {
                        bytes: {
                          type: 'long',
                        },
                        dropped: {
                          type: 'long',
                        },
                        errors: {
                          type: 'long',
                        },
                        packets: {
                          type: 'long',
                        },
                      },
                    },
                  },
                },
                process: {
                  properties: {
                    cgroup: {
                      properties: {
                        blkio: {
                          properties: {
                            id: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            path: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            total: {
                              properties: {
                                bytes: {
                                  type: 'long',
                                },
                                ios: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        cpu: {
                          properties: {
                            cfs: {
                              properties: {
                                period: {
                                  properties: {
                                    us: {
                                      type: 'long',
                                    },
                                  },
                                },
                                quota: {
                                  properties: {
                                    us: {
                                      type: 'long',
                                    },
                                  },
                                },
                                shares: {
                                  type: 'long',
                                },
                              },
                            },
                            id: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            path: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            rt: {
                              properties: {
                                period: {
                                  properties: {
                                    us: {
                                      type: 'long',
                                    },
                                  },
                                },
                                runtime: {
                                  properties: {
                                    us: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                            stats: {
                              properties: {
                                periods: {
                                  type: 'long',
                                },
                                throttled: {
                                  properties: {
                                    ns: {
                                      type: 'long',
                                    },
                                    periods: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        cpuacct: {
                          properties: {
                            id: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            path: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            percpu: {
                              properties: {},
                            },
                            stats: {
                              properties: {
                                system: {
                                  properties: {
                                    ns: {
                                      type: 'long',
                                    },
                                  },
                                },
                                user: {
                                  properties: {
                                    ns: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                            total: {
                              properties: {
                                ns: {
                                  type: 'long',
                                },
                              },
                            },
                          },
                        },
                        id: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        memory: {
                          properties: {
                            id: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            kmem: {
                              properties: {
                                failures: {
                                  type: 'long',
                                },
                                limit: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                usage: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                    max: {
                                      properties: {
                                        bytes: {
                                          type: 'long',
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            kmem_tcp: {
                              properties: {
                                failures: {
                                  type: 'long',
                                },
                                limit: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                usage: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                    max: {
                                      properties: {
                                        bytes: {
                                          type: 'long',
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            mem: {
                              properties: {
                                failures: {
                                  type: 'long',
                                },
                                limit: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                usage: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                    max: {
                                      properties: {
                                        bytes: {
                                          type: 'long',
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            memsw: {
                              properties: {
                                failures: {
                                  type: 'long',
                                },
                                limit: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                usage: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                    max: {
                                      properties: {
                                        bytes: {
                                          type: 'long',
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            path: {
                              ignore_above: 1024,
                              type: 'keyword',
                            },
                            stats: {
                              properties: {
                                active_anon: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                active_file: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                cache: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                hierarchical_memory_limit: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                hierarchical_memsw_limit: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                inactive_anon: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                inactive_file: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                major_page_faults: {
                                  type: 'long',
                                },
                                mapped_file: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                page_faults: {
                                  type: 'long',
                                },
                                pages_in: {
                                  type: 'long',
                                },
                                pages_out: {
                                  type: 'long',
                                },
                                rss: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                rss_huge: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                swap: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                                unevictable: {
                                  properties: {
                                    bytes: {
                                      type: 'long',
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        path: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                    cmdline: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    cpu: {
                      properties: {
                        start_time: {
                          type: 'date',
                        },
                        system: {
                          type: 'long',
                        },
                        total: {
                          properties: {
                            pct: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                            ticks: {
                              type: 'long',
                            },
                          },
                        },
                        user: {
                          type: 'long',
                        },
                      },
                    },
                    env: {
                      properties: {},
                    },
                    fd: {
                      properties: {
                        limit: {
                          properties: {
                            hard: {
                              type: 'long',
                            },
                            soft: {
                              type: 'long',
                            },
                          },
                        },
                        open: {
                          type: 'long',
                        },
                      },
                    },
                    memory: {
                      properties: {
                        rss: {
                          properties: {
                            bytes: {
                              type: 'long',
                            },
                            pct: {
                              scaling_factor: 1000,
                              type: 'scaled_float',
                            },
                          },
                        },
                        share: {
                          type: 'long',
                        },
                        size: {
                          type: 'long',
                        },
                      },
                    },
                    name: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    pgid: {
                      type: 'long',
                    },
                    pid: {
                      type: 'long',
                    },
                    ppid: {
                      type: 'long',
                    },
                    state: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    username: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                  },
                },
                socket: {
                  properties: {
                    direction: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    family: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    local: {
                      properties: {
                        ip: {
                          type: 'ip',
                        },
                        port: {
                          type: 'long',
                        },
                      },
                    },
                    process: {
                      properties: {
                        cmdline: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        command: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        exe: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        pid: {
                          type: 'long',
                        },
                      },
                    },
                    remote: {
                      properties: {
                        etld_plus_one: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        host: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        host_error: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                        ip: {
                          type: 'ip',
                        },
                        port: {
                          type: 'long',
                        },
                      },
                    },
                    user: {
                      properties: {
                        id: {
                          type: 'long',
                        },
                        name: {
                          ignore_above: 1024,
                          type: 'keyword',
                        },
                      },
                    },
                  },
                },
              },
            },
            tags: {
              ignore_above: 1024,
              type: 'keyword',
            },
            type: {
              ignore_above: 1024,
              type: 'keyword',
            },
            zookeeper: {
              properties: {
                mntr: {
                  properties: {
                    approximate_data_size: {
                      type: 'long',
                    },
                    ephemerals_count: {
                      type: 'long',
                    },
                    followers: {
                      type: 'long',
                    },
                    hostname: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    latency: {
                      properties: {
                        avg: {
                          type: 'long',
                        },
                        max: {
                          type: 'long',
                        },
                        min: {
                          type: 'long',
                        },
                      },
                    },
                    max_file_descriptor_count: {
                      type: 'long',
                    },
                    num_alive_connections: {
                      type: 'long',
                    },
                    open_file_descriptor_count: {
                      type: 'long',
                    },
                    outstanding_requests: {
                      type: 'long',
                    },
                    packets: {
                      properties: {
                        received: {
                          type: 'long',
                        },
                        sent: {
                          type: 'long',
                        },
                      },
                    },
                    pending_syncs: {
                      type: 'long',
                    },
                    server_state: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    synced_followers: {
                      type: 'long',
                    },
                    version: {
                      ignore_above: 1024,
                      type: 'keyword',
                    },
                    watch_count: {
                      type: 'long',
                    },
                    znode_count: {
                      type: 'long',
                    },
                  },
                },
              },
            },
          },
        },
      },
      order: 0,
      settings: {
        'index-mapping-total_fields-limit': 10000,
        'index-refresh_interval': '5s',
      },
      template: 'metricbeat-*',
    },
  },
];

module.exports = mappings;
