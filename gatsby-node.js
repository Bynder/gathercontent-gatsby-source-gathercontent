const { getProjectData } = require('gathercontent.js');

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, options) => {
  const { createNode } = actions
  const { email, apiKey, projectId } = options
  const { folders, items, templates, project } = await getProjectData(projectId, { apiKey, email })

  folders.map(f => {
    createNode({
      id: createNodeId(f.uuid),
      name: f.name,
      slug: f.slug,
      position: f.position,
      parent: f.parentUuid ? createNodeId(f.parentUuid) : null,
      children: items.filter(i => i.folderUuid === f.uuid).map(i => createNodeId(i.id)),
      internal: {
        type: 'gathercontentFolders',
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
      position: i.position,
      children: [],
      folder___NODE: createNodeId(i.folderUuid),
      template___NODE: i.templateId ? createNodeId(i.templateId) : null,
      status___NODE: i.statusId ? createNodeId(i.statusId) : null,
      internal: {
        type: 'gathercontentItems',
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
        type: 'gathercontentTemplates',
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
        type: 'gathercontentStatuses',
        content: JSON.stringify(s),
        contentDigest: createContentDigest(s)
      }
    });
  })
}