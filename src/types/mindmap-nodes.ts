import { ReactNode } from 'react'
import { EXTERNAL_LINK } from '@constants/external-link'
import { CONNECTION_POSITION, CONNECTION_STYLE } from '@constants/connections'
import { PROGRESS_STATUS } from '@constants/progress-status'

export type Mindmap = MindmapNodeRoot

export type MindmapNode = MindmapNodeRoot | MindmapNodeChild

type MindmapNodeConnections = {
  [key in ConnectionPositions]?: Array<
    MindmapNodeChild & { connectionStyle?: ConnectionStyles }
  >
}

type MindmapNodeCommonInfo = {
  id: string
  title: string
  description?: string
  externalLinks?: MindmapNodeExternalLink[]
  tags?: MindmapNodeTag[]
  completion?: CompletionType
  todoList?: MindmapNodeToDoItem[]
}

type MindmapNodeRoot = {
  id: 'root'
  children?: MindmapNodeConnections
} & MindmapNodeCommonInfo

type MindmapNodeChild =
  | MindmapNodeParentTop
  | MindmapNodeParentRight
  | MindmapNodeParentBottom
  | MindmapNodeParentLeft

type MindmapNodeParentTop = {
  parent: {
    id: string
    connection: typeof CONNECTION_POSITION.TOP
  }
  children?: Omit<MindmapNodeConnections, typeof CONNECTION_POSITION.TOP>
} & MindmapNodeCommonInfo

type MindmapNodeParentRight = {
  parent: {
    id: string
    connection: typeof CONNECTION_POSITION.RIGHT
  }
  children?: Omit<MindmapNodeConnections, typeof CONNECTION_POSITION.RIGHT>
} & MindmapNodeCommonInfo

type MindmapNodeParentBottom = {
  parent: {
    id: string
    connection: typeof CONNECTION_POSITION.BOTTOM
  }
  children?: Omit<MindmapNodeConnections, typeof CONNECTION_POSITION.BOTTOM>
} & MindmapNodeCommonInfo

type MindmapNodeParentLeft = {
  parent: {
    id: string
    connection: typeof CONNECTION_POSITION.LEFT
  }
  children?: Omit<MindmapNodeConnections, typeof CONNECTION_POSITION.LEFT>
} & MindmapNodeCommonInfo

export type MindmapNodeExternalLink = {
  name: string
  url: string
  tooltip?: string
  icon?: ReactNode
  type?: ExternalLinkTypes
}

export type MindmapNodeTag = {
  id: string
  name: string
  color: string
}

export type ConnectionStyles =
  (typeof CONNECTION_STYLE)[keyof typeof CONNECTION_STYLE]
export type ConnectionPositions =
  (typeof CONNECTION_POSITION)[keyof typeof CONNECTION_POSITION]
export type ExternalLinkTypes =
  (typeof EXTERNAL_LINK)[keyof typeof EXTERNAL_LINK]
export type ProgressStatuses =
  (typeof PROGRESS_STATUS)[keyof typeof PROGRESS_STATUS]

export type MindmapNodeToDoItem = {
  id: string
  title: string
  description?: string
  completed: boolean
  links?: MindmapNodeExternalLink[]
  tags?: MindmapNodeTag[]
}

type CompletionType = {
  totalChildren: number
  completedChildren: number
}

export type UserCompletedEntries =
  | {
      id: string
      type: 'node'
      status: ProgressStatuses
      completion: CompletionType
    }[]
  | {
      id: string
      type: 'todo'
      status: ProgressStatuses
    }[]
