const { getProjectData } = require('gathercontent.js');

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, options) => {
  const { createNode } = actions
  const { userName, apiKey, projectId, requiredStatuses } = options

  try {
    const { folders, items, templates, project } = await getProjectData(projectId, { apiKey, email: userName }, requiredStatuses);

    folders.map(f => {
      createNode({
        id: createNodeId(f.uuid),
        name: f.name,
        slug: f.slug,
        parent: f.parentUuid ? createNodeId(f.parentUuid) : null,
        children: items.filter(i => i.folderUuid === f.uuid).map(i => createNodeId(i.id)),
        internal: {
          type: 'folders',
          content: JSON.stringify(f),
          contentDigest: createContentDigest(f)
        }
      });
    })

    items.map(i => {
      createNode({
        id: createNodeId(i.id),
        itemId: i.id,
        name: i.name,
        slug: i.slug,
        status: i.statusName,
        itemContent: i.itemContent,
        parent: i.folderUuid,
        children: [],
        folder___NODE: createNodeId(i.folderUuid),
        template___NODE: i.templateId ? createNodeId(i.templateId) : null,
        status___NODE: i.statusId ? createNodeId(i.statusId) : null,
        internal: {
          type: 'items',
          content: JSON.stringify(i),
          contentDigest: createContentDigest(i),
        },
      })
    })

    templates.map(t => {
      createNode({
        id: createNodeId(t.id),
        name: t.name,
        slug: t.slug,
        parent: null,
        children: items.filter(i => i.structureUuid === t.structureUuid).map(i => createNodeId(i.id)),
        internal: {
          type: 'templates',
          content: JSON.stringify(t),
          contentDigest: createContentDigest(t)
        }
      });
    })

    project.statuses.data.map(s => {
      createNode({
        id: createNodeId(s.id),
        name: s.name,
        slug: s.slug,
        parent: null,
        children: items.filter(i => i.statusId === s.id).map(i => createNodeId(i.id)),
        internal: {
          type: 'status',
          content: JSON.stringify(s),
          contentDigest: createContentDigest(s)
        }
      });
    })
  } catch(e) {
    console.error('Failed to create nodes', e);
  }
}