import nock from 'nock';
import { sourceNodes } from '../gatsby-node';
import { gatsbyNodeTypes } from '../gatsby-nodeTypes';
import { mockGetProjectData } from 'gathercontent.js/dist/__tests__/mocks/mockGetProjectData';

const expectFolderNodeCreation = (createNodeCall, folder, parent, children) => {
  expect(createNodeCall).toEqual([{
    id: folder.uuid,
    name: folder.name,
    slug: folder.slug,
    position: folder.position,
    parent,
    children,
    internal: {
      type: gatsbyNodeTypes.FOLDERS,
      content: JSON.stringify(folder),
      contentDigest: folder
    }}]);
}

const expectItemNodeCreation = (createNodeCall, item) => {
  expect(createNodeCall).toEqual([{
    id: item.id,
    itemId: item.id,
    name: item.name,
    slug: item.slug,
    position: item.position,
    parent: item.folderUuid,
    status: item.statusName,
    children: [],
    folder___NODE: item.folderUuid,
    template___NODE: item.templateId,
    status___NODE: item.statusId,
    itemContent: item.itemContent,
    internal: {
      type: gatsbyNodeTypes.ITEMS,
      content: JSON.stringify(item),
      contentDigest: item
    }}]);
}

const expectTemplateNodeCreation = (createNodeCall, template, children) => {
  expect(createNodeCall).toEqual([{
    id: template.id,
    name: template.name,
    slug: template.slug,
    parent: null,
    children,
    internal: {
      type: gatsbyNodeTypes.TEMPLATES,
      content: JSON.stringify(template),
      contentDigest: template
    }}]);
}

const expectStatusNodeCreation = (createNodeCall, status, children) => {
  expect(createNodeCall).toEqual([{
    id: status.id,
    name: status.name,
    slug: status.slug,
    parent: null,
    children,
    internal: {
      type: gatsbyNodeTypes.STATUSES,
      content: JSON.stringify(status),
      contentDigest: status
    }}]);
}

test('creating the Gatsby nodes for a GatherContent project', async () => {
  const apiNock = nock(/gathercontent\.com/).persist();
  const { project, folders, items, templates } = await mockGetProjectData(apiNock);
  const createNode = jest.fn();
  const createContentDigest = jest.fn((value) => value);
  const createNodeId = jest.fn((value) => value);

  await sourceNodes({
    actions: { createNode },
    createNodeId: createNodeId,
    createContentDigest: createContentDigest,
  }, {
    apiKey: '123',
    email: 'hello@world.com',
    projectId: 1
  });

  expectFolderNodeCreation(createNode.mock.calls[0], folders[0], null, [items[0].id, items[1].id]);
  expectFolderNodeCreation(createNode.mock.calls[1], folders[1], folders[0].uuid, []);

  expectItemNodeCreation(createNode.mock.calls[2], items[0]);
  expectItemNodeCreation(createNode.mock.calls[3], items[1]);

  expectTemplateNodeCreation(createNode.mock.calls[4], templates[0], [items[0].id, items[1].id])

  expectStatusNodeCreation(createNode.mock.calls[5], project.statuses.data[0], [items[0].id, items[1].id])
});