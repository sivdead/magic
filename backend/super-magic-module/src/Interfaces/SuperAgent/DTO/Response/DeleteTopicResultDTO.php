<?php

declare(strict_types=1);
/**
 * Copyright (c) The Magic , Distributed under the software license
 */

namespace Dtyq\SuperMagic\Interfaces\SuperAgent\DTO\Response;

use App\Infrastructure\Core\AbstractDTO;

/**
 * 删除话题结果DTO
 * 用于封装删除话题操作的返回数据.
 */
class DeleteTopicResultDTO extends AbstractDTO
{
    /**
     * 被删除的任务状态ID(主键)
     * 字符串类型.
     */
    public string $id;

    /**
     * 构造函数.
     */
    public function __construct(?array $data = null)
    {
        parent::__construct($data);
    }

    /**
     * 从任务状态ID创建DTO.
     *
     * @param int $id 任务状态ID(主键)
     */
    public static function fromId(int $id): self
    {
        $dto = new self();
        $dto->id = (string) $id;
        return $dto;
    }

    /**
     * 获取任务状态ID.
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * 设置任务状态ID.
     *
     * @param int $id 任务状态ID(主键)
     */
    public function setId(int $id): self
    {
        $this->id = (string) $id;
        return $this;
    }
}
